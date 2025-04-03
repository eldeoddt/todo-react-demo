import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import React, {useState} from "react";

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
      done: false
    } 
  ]);

  // 자동으로 html 태그를 자바스크립트 코드로 변환해줌.
  // app 밑에는 todo가 있음.

  let todoItems = 
    items.length>0 && items.map((item) => <Todo item={item} key={item.id}/>);
    // map 함수로 item 하나 당 todo 컴포넌트를 하나씩 생성하여 todoItems 배열에 담는다.

  return (
    <div className="App">
      {todoItems} 
      {/* 자식에게 값을 전달할때 props를 사용한다. */}
      {/* <Todo item={items[0]}/> todo 컴포넌트를 app 밑에 배치한다. */}
      {/* <Todo item={items[1]}/> 2개가 생긴다. */}
    </div>
  );
}

export default App;
