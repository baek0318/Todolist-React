import {useState} from 'react';
import { Link, Route } from "react-router-dom"
import { TodoCreate } from ".";

const TodoList = ({todo}) => {

  return (
    <div>
      <div>
        <h1>Todo</h1>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
      <div>
        <div>
          <Link to={'/todolist/todocreate'}>추가</Link>
        </div>
      </div>
    </div>
  );
}

export default TodoList;