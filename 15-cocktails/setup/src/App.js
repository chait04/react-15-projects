import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import Cocktail from './components/Cocktail'
function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/about"  component={About} />
          <Route exact path="/cocktail/:id"  component={SingleCocktail} />
          <Route exact path="*"  component={Error} />
          
        </Switch>
      </Router>
  )
}

export default App
