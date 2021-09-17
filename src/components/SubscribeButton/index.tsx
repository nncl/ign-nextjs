import { signIn, useSession } from 'next-auth/client';

import styles from './styles.module.scss'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { useRouter } from 'next/router';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const router = useRouter()
  const [ session ] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    if (session.activeSubscription) {
      return router.push('/posts');
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
