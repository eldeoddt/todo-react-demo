import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React, {useState} from "react";
import {Container, List, Paper} from "@mui/material";
import AddTodo from './AddTodo';

function App() {
  const [items, setItems] = useState([
    {
      id: "0",
      title: "hello world 1",
      done: true
    } ,
    {
      id: "1",
      title: "hello world 2",
      done: true
    } 
  ]);

  const addItem = (item) => {
    item.id = "ID-"+items.length; // key를 위한 id
    item.done = false; // done초기화
    setItems([...items, item]);
    console.log("items: ", items);
  };

  // 자동으로 html 태그를 자바스크립트 코드로 변환해줌.
  // app 밑에는 todo가 있음.

  let todoItems = items.length>0 && (
    <Paper style={{ margin: 16 }}> 
    {/* paper에 넣어준다. */}
      <List>
      {items.map((item) =>(<Todo item={item} key={item.id}/>    
      ))}
      </List> 
    </Paper>
  ); 
    // map 함수로 item 하나 당 todo 컴포넌트를 하나씩 생성하여 todoItems 배열에 담는다.

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo />
        <div className='TodoList'>
        {todoItems} 
      {/* 자식에게 값을 전달할때 props를 사용한다. */}
      {/* <Todo item={items[0]}/> todo 컴포넌트를 app 밑에 배치한다. */}
      {/* <Todo item={items[1]}/> 2개가 생긴다. */}
        </div>
      </Container>
    </div>
  );
}

export default App;
