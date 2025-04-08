import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox } from "@mui/material";

// props로 부모로부터 데이터 받을 수 있음.
const Todo = (props) => { // 리액트 컴포넌트이다.
  // 모든 리액트 컴포넌트는 람다 함수 형태로 만든다.
  const [item, setItem] = useState(props.item); // 부모가 넘겨준 item 객체를 item 상태 변수가 가리킨다.
  // 유즈스테이트 사용하여 함수 배열을 반환한다.
  return (
    <ListItem>
      <Checkbox checked={item.done} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked" }}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title} //아이템에 타이틀이 보여지게됨.
          // 아이템은 투두컴포넌트의 상태변수
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
    </ListItem>
    // jsx문법의 코드이다.
    // <div className="Todo">
    //     {/* className을 사용해서 div 이름을 지정한다. */}
    //     <input type="checkbox" id={item.id} name={item.id} checked={item.done} />
    //     <label for={item.id}>{item.title} {props.number}</label>
    // </div>
  );
};

export default Todo;
