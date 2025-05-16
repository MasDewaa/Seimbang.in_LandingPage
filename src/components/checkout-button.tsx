import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createCheckoutSession } from '@/lib/stripe';
import { products, type Product } from '@/stripe-config';

interface CheckoutButtonProps {
  productId: Product;
  className?: string;
}

export function CheckoutButton({ productId, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const product = products[productId];
      
      const checkoutUrl = await createCheckoutSession(
        product.priceId,
        product.mode,
        `${window.location.origin}/checkout/success?product=${productId}`,
        `${window.location.origin}/pricing?canceled=true`,
      );

      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
    >
      {loading ? 'Loading...' : 'Subscribe Now'}
    </Button>
  );
}