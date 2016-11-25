import styles from './navbar.css'

import { h, Component } from 'preact'
import { Link } from 'preact-router'

export default class NavBar extends Component {
  render() {
    return (
      <ul className={styles.nav_bar}>
        <li className={styles.nav_item}><Link href="/" activeClassName={styles.active} className={styles.active}>Home</Link></li>
        <li className={styles.nav_item}><Link href="/about" onlyActiveOnIndex={false} activeClassName={styles.active}>About</Link></li>
        <li className={styles.nav_item}><Link href="/login" onlyActiveOnIndex={false} activeClassName={styles.active}>Login</Link></li>
      </ul>
    )
  }
}
