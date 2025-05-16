import { products } from '@/stripe-config';
import { supabase } from '@/lib/supabase';

export async function createCheckoutSession(
  priceId: string,
  mode: 'payment' | 'subscription',
  successUrl: string,
  cancelUrl: string,
) {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    throw new Error('Not authenticated');
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/stripe-checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.access_token}`,
    },
    body: JSON.stringify({
      price_id: priceId,
      mode,
      success_url: successUrl,
      cancel_url: cancelUrl,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create checkout session');
  }

  const { url } = await response.json();
  return url;
}

export async function getActiveSubscription() {
  const { data: subscription } = await supabase
    .from('stripe_user_subscriptions')
    .select('*')
    .maybeSingle();

  if (!subscription) {
    return null;
  }

  // Find the product that matches the subscription's price_id
  const product = Object.values(products).find(p => p.priceId === subscription.price_id);

  return {
    ...subscription,
    product: product || null,
  };
}