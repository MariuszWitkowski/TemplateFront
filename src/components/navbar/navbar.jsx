import styles from './navbar.css'
import React from 'react'
import { Link, IndexLink } from 'react-router'

export default class NavBar extends React.Component {
  render() {
    return (
      <ul className={styles.nav_bar}>
        <li className={styles.nav_item}><IndexLink to="/" activeClassName={styles.active}>Home</IndexLink></li>
        <li className={styles.nav_item}><Link to="about" onlyActiveOnIndex={false} activeClassName={styles.active}>About</Link></li>
        <li className={styles.nav_item}><Link to="login" onlyActiveOnIndex={false} activeClassName={styles.active}>Login</Link></li>
      </ul>
    )
  }
}
