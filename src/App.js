import React, {useState,} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AuthRoute, SignIn, SignUp} from './components/auth'
import {MainView} from './components/todo'
import style from './App.module.css'

function App() {
  
  const [authenticated, setAuthenticated] = useState(false);
  
  const login = (value) => setAuthenticated(value);
  const logout = (value) => setAuthenticated(value);

  return (
    <div className={`${style.App}`}>
      <Switch>
        <Route path="/login" render={props => (
            <SignIn authenticated={authenticated} login={login} {...props} />
          )}
        />
        <Route path="/signup" component={SignUp}/>
        <Route path="/main" component={MainView}/>
      </Switch>
    </div>
  );
}

export default App;
