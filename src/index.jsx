import styles from './index.css'

import { h, render, Component, cloneElement } from 'preact'
import Home from './routes/Home'
import About from './routes/About'
import Login from './routes/Login'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { Router } from 'preact-router'

class Root extends Component {

  handleOnChange(e) {
    console.log(e)
  }

  render() {
    return (
      <div className={styles.container}>
        <NavBar />
        <div className={styles.content}>
          <Router onChange={this.handleOnChange.bind(this)}>
            <Home path="/" />
            <About path="/about" />
            <Login path="/login" />
          </Router>
        </div>
        <Footer />
      </div>
    )
  }

}

const container = document.getElementById('app')
container.innerHTML = ''
render(<Root />, container)
