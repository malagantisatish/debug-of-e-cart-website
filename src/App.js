import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from './components/Products'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
