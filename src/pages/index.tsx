import { GetStaticProps } from 'next'
import Head from 'next/head'

import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={ styles.contentContainer }>
        <section className={ styles.hero }>
          <span>👏 Hey, welcome</span>

          <h1>News about the <span>React</span> world.</h1>

          {
            product?.amount && (
              <>
                <p>
                  Get access to all the publications <br/>
                  <span>for { product?.amount || 0 } month</span>
                </p>

                <SubscribeButton priceId={ product?.priceId || '' }/>
              </>
            )
          }
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding"/>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const revalidate = 60 * 60 * 24 // 24 hours;

  try {
    const price = await stripe.prices.retrieve('price_1J34pQHenXu3l6hFARaE0uLd')

    const product = {
      id: price.id,
      amount: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format((price.unit_amount / 100)),
    }

    return {
      props: {
        product
      },
      revalidate
    }
  } catch (e) {
    return {
      props: {}
    }
  }
}
