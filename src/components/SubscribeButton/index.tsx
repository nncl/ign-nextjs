import { signIn, useSession } from 'next-auth/client';

import styles from './styles.module.scss'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [ session ] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    /*
     * Creating Stripe Checkout Session
     */
    try {
      const { data } = await api.post('/subscribe')
      const { sessionId } = data
      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })

    } catch ({ message }) {
      alert(message)
    }
  }

  return (
    <button type='button' className={ styles.subscribeButton } onClick={ handleSubscribe }>
      Subscribe now
    </button>
  )
}
