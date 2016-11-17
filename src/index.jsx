import styles from './index.css'

import React, { Component } from 'react'
import { render } from 'react-dom'
import Home from './routes/Home'
import About from './routes/About'
import Login from './routes/Login'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'

class Root extends Component {

  render() {
    const { counter } = this.state || {}

    return (
      <div className={styles.container}>
        <NavBar counter={counter} />
        <div className={styles.content}>
          {React.cloneElement(this.props.children, { state:this.state })}
        </div>
        <Footer/>
      </div>
    )
  }

}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="login" component={Login} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)

const container = document.getElementById('app')
render(router, container)
