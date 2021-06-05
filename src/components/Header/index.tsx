import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={ styles.headerContainer }>
      <div className={ styles.headerContent }>
        <img src="/images/logo.svg" alt="ig.news" loading="lazy"/>
        <nav>
          <a className={styles.active} href="" title="Home">
            Home
          </a>
          <a href="" title="Posts">
            Posts
          </a>
        </nav>
      </div>
    </header>
  )
}
