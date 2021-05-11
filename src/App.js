import React, {useState,} from 'react';
import { Route, Switch } from 'react-router';
import {Home, Signup, Login, AuthRoute} from './components';
import {TodoList, TodoCreate} from './components/todo';

const App = () => {

  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState(0);
  const [todo, setTodo] = useState(null);

  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/signup" render={() => <Signup setUserId={setUserId} userId={userId}/>}/>
      <Route path="/login" render={() => <Login setAuth={setAuth}/>}/>
      <Switch>
        <Route path='/todolist/todocreate'render={() => <TodoCreate setTodo={setTodo} userId={userId}/>}/>
        <Route path='/todolist'render={() => <TodoList todo={todo}/>}/>
      </Switch>
    </div>
  );
}

export default App;
