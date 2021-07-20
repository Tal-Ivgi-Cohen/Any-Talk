import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from './cmps/Footer.jsx';
import { Header } from './cmps/Header.jsx'
import { routes } from './routes.js'


export function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  )
}

