import React, {useState,} from 'react'
import { Route } from 'react-router'
import {Home, Signup} from './components'

const App = () => {

  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/signup" component={Signup}/>
    </div>
  );
}

export default App;
