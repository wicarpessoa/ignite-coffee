import Stripe from 'stripe'
const stripeSecretKey = import.meta.env.VITE_STRIPE_SECRET_KEY as string
export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'ignite coffee',
  },
})
