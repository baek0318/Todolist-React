import {useState} from 'react';
import {postTodoInfo} from '../../api/todo';

const TodoCreate = ({setTodo, userId}) => {

  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const contentHandler = (e) => {
    setContent(e.target.value);
  }

  const categoryHandler =(e) => {
    setCategory(e.target.value);
  }

  const saveHandler = async () => {
    let todo = {
      title : content,
      status : 'ING',
      
    };
    let todoId = postTodoInfo(userId, );
  }
  
  return (
    <div>
      <div>
        <h1>Todo 작성하기</h1>
      </div>
      <div>
        <div>할 일</div>
        <div>
          <input placeholder='할 일을 입력해주세요' onChange={contentHandler}/>
        </div>
      </div>
      <div>
        <div>카테고리</div>
        <div>
          <input placeholder='카테고리를 입력해주세요' onChange={categoryHandler}/>
        </div>
      </div>
      <div>
        <input type='button' value='저장' onClick={saveHandler}/>
      </div>
    </div>
  );
}

export default TodoCreate;