import Link from 'next/link'
import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink';

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
          <ActiveLink href="/" activeClassName={styles.active}>
            <a  title="Home">
              Home
            </a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active} prefetch>
            <a title="Posts">
              Posts
            </a>
          </ActiveLink>
        </nav>

        <SignInButton/>
      </div>
    </header>
  )
}
