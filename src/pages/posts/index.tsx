import Head from 'next/head';

import styles from './styles.module.scss'
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={ styles.container }>
        <div className={ styles.posts }>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Post Title</strong>
            <p>Lorem ipsum dolor sit amet consectue adipiscing elit.</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Post Title</strong>
            <p>Lorem ipsum dolor sit amet consectue adipiscing elit.</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Post Title</strong>
            <p>Lorem ipsum dolor sit amet consectue adipiscing elit.</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Post Title</strong>
            <p>Lorem ipsum dolor sit amet consectue adipiscing elit.</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Post Title</strong>
            <p>Lorem ipsum dolor sit amet consectue adipiscing elit.</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Post Title</strong>
            <p>Lorem ipsum dolor sit amet consectue adipiscing elit.</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Post Title</strong>
            <p>Lorem ipsum dolor sit amet consectue adipiscing elit.</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [ Prismic.predicates.at('document.type', 'post') ],
    {
      fetch: [ 'post.title', 'post.content' ],
      pageSize: 100,
    }
  )

  return {
    props: {}
  }
}
