import Link from 'next/link'
import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';

export function Header() {
  return (
    <header className={ styles.headerContainer }>
      <div className={ styles.headerContent }>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" width={ 110 } height={ 31 } alt="ig.news" loading="lazy"/>
          </a>
        </Link>

        <nav>
          <Link href="/">
            <a className={ styles.active } title="Home">
              Home
            </a>
          </Link>

          <Link href="/posts" prefetch>
            <a title="Posts">
              Posts
            </a>
          </Link>
        </nav>

        <SignInButton/>
      </div>
    </header>
  )
}
