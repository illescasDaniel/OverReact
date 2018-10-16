import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from '../../config/appRoutes';
import styles from './App.sass'
// CSS MODULES: import styles from './App.sass' ... <p className={styles.blabla}> ... </p>
// BOOTSTRAP: import { Button } from 'reactstrap'
// RESOUCES: import logo from '../../resources/logo.svg'
// FONT AWESOME: import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// FONT AWESOME icon: import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header/>
          <main role="main" className={styles.main}>
            <AppRoutes/>
          </main>
          <footer/>
        </div>
      </Router>
    )
  }
}
