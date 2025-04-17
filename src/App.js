import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React, {useState, useEffect} from "react";
import {Container, List, Paper} from "@mui/material";
import AddTodo from './AddTodo';
import { API_BASE_URL } from './app-config'; // app-config에서 작성한 url import

import {call} from "./service/ApiService";

function App() {
  // 빈 배열로 초기화
  const [items, setItems] = useState([]);

  useEffect(() => {
    // call 함수 호출
    call("/todo", "GET", null) 
    .then((response)=> setItems(response.data));
    // 요청 정보를 담는다.

  // call 적용 이전 내용
  // fetch로 백엔드 데이터 요청.
  // json 객체를 얻는다.

  /* 
  fetch(API_BASE_URL + "/todo", requestOptions)
    .then((response) => response.json())
    .then(
      (response) => {
        // data값을 state.items에 설정한다.
        setItems(response.data); // 상태가 변경되어 리렌더링 발생.
      },
      (error) => {

      }
    );
  */
  }, []); // 빈 배열-> 최초 렌더링 시에만 콜백 함수가 실행됨.
  // useeffect 콜백 함수, 디펜던시 배열. -> 배열값 변할때마다 렌더링됨

  const addItem = (item) => {
    // 백엔드에 item 추가
    call("/todo", "POST", item)
    .then((response)=>setItems(response.data)); // 상태 변수에 반영 => 리렌더링
  };

  const deleteItem = (item) => {
    // 백엔드에 item 삭제 요청. delete
    call("/todo", "DELETE", item)
    .then((response)=>setItems(response.data));
  };

  const editItem = (item) => {
    // 백엔드에 item 수정 요청. put
    call("/todo", "PUT", item)
    .then((response)=>setItems(response.data));
  };

  // call 적용 이전 함수
  /* 
  const addItem = (item) => {
    item.id = "ID-"+items.length; // key를 위한 id
    item.done = false; // done초기화
    setItems([...items, item]);
    console.log("items: ", items);
  };

  // app 내의 delete item
  // filter 이용하여 매개변수로의 아이템 id와 다른 아이템만 골라낸다.
  const deleteItem = (item) => {
    const newItems = items.filter(e => (e.id !== item.id));
    // setItems를 하면 item배열 상태 변화가 된다. -> App 컴포너트가 리렌더링된다.
    // 지워지면 다시 그린다.
    setItems([...newItems]); // 삭제 후 배열을 state 객체에 저장한다. 배열을 복제한다.
  }; 

  // 아이템 title을 수정하는 함수.
  // 현재 갱신된 items 배열을 다시 상태 변수에 넣어준다. -> 상태 바뀜. 자식 쪽에서 바꿨기 때문에.
  const editItem = () => {
    setItems([...items]); // 리렌더링 발생
  };
  */

  // 자동으로 html 태그를 자바스크립트 코드로 변환해줌.
  // app 밑에는 todo가 있음.

  let todoItems = items.length>0 && (
    <Paper style={{ margin: 16 }}> 
    {/* paper에 넣어준다. */}
      <List>
      {items.map((item) => (
        // todo 컴포넌트 생성. 시 editItem 함수를 넘겨준다.
        <Todo item={item} key={item.id} 
        editItem={editItem} deleteItem={deleteItem}/>    
      ))}
      </List> 
    </Paper>
  ); 
    // map 함수로 item 하나 당 todo 컴포넌트를 하나씩 생성하여 todoItems 배열에 담는다.

  return (
    <div className="App">
      <Container maxWidth="md">
        {/* addItem? */}
        <AddTodo addItem={addItem}/>
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
