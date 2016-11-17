import styles from './footer.css'
import React from 'react'
import { Link, IndexLink } from 'react-router'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
      	This is simple footer
      </div>
    )
  }
}
