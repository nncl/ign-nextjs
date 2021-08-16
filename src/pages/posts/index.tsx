import Head from 'next/head';

import styles from './styles.module.scss'

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
