import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { Provider as NextAuthProvider } from 'next-auth/client'

import { Header } from '../components/Header';

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const site = "https://test.com";
  const canonicalURL = site + useRouter().asPath;

  return (
    <NextAuthProvider session={ pageProps.session }>
      <Head>
        <link rel='canonical' href={canonicalURL}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <Header/>

      <Component { ...pageProps } />
    </NextAuthProvider>
  )
}

export default MyApp
