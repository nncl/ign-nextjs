import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';

export function Header() {
  return (
    <header className={ styles.headerContainer }>
      <div className={ styles.headerContent }>
        <a href="/">
          <img src="/images/logo.svg" alt="ig.news" loading="lazy"/>
        </a>

        <nav>
          <a className={styles.active} href="" title="Home">
            Home
          </a>
          <a href="" title="Posts">
            Posts
          </a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
