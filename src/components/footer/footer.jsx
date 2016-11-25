import styles from './footer.css'
import { h, Component } from 'preact'

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
      	This is simple footer
      </div>
    )
  }
}
