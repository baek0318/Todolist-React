import React, {useState,} from 'react'
import { Route } from 'react-router'
import {Home, Signup, Login} from './components'

const App = () => {

  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
