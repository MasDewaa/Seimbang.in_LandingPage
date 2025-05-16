export const products = {
  premium: {
    id: 'prod_SK0TTFOZBGemZl',
    priceId: 'price_1RPMSzBQYI0DAYifww49U4wD',
    name: 'Premium',
    description: 'Paket Premium Gacor',
    mode: 'subscription' as const,
  },
  family: {
    id: 'prod_SK0SqZXZjcFf17',
    priceId: 'price_1RPMRyBQYI0DAYifc8Be9Kcp',
    name: 'Family',
    description: 'Paket Family Bahagia',
    mode: 'subscription' as const,
  },
  free: {
    id: 'prod_SK0SiugqE8S9iw',
    priceId: 'price_1RPMRJBQYI0DAYifODBEi6Eo',
    name: 'Free',
    description: 'Paket Free Seimbang.in',
    mode: 'payment' as const,
  },
} as const;

export type Product = keyof typeof products;
export type ProductMode = typeof products[Product]['mode'];