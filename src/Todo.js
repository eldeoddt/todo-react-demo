import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

// props로 부모로부터 데이터 받을 수 있음.
const Todo = (props) => {
  // 리액트 컴포넌트이다.
  // 모든 리액트 컴포넌트는 람다 함수 형태로 만든다.
  const [item, setItem] = useState(props.item); // 부모가 넘겨준 item 객체를 item 상태 변수가 가리킨다.
  // 유즈스테이트 사용하여 함수 배열을 반환한다.

  // readOnly 상태 변수 선언
  const [readOnly, setReadOnly] = useState(true); // 초기값 true

  const deleteItem = props.deleteItem; // props로 전달받은 deleteItem을 저장.

  const editItem = props.editItem; // 부모(app.js)가 넘겨준 edititem 변수를 받는다.

  // title 수정 후 enter 누르면 readonly모드로 수정 불가하도록 한다.
  const turnOnReadOnly = (e) => {
    if (e.key === "Enter" && readOnly === false) {
      setReadOnly(true);
      // 사용자가 수정을 마친 시점에 editItem을 호출한다.
      editItem(item);
    }
  };

  // title 클릭 시 readonly를 false로 만들어 수정가능하도록 하는 함수.
  const turnOffReadOnly = () => {
    setReadOnly(false);
  };

  // todo에서 delete handler
  const deleteEventHandler = () => {
    deleteItem(item);
  };

  // editItem 수정 함수.
  const editEventHandler = (e) => {
    // e.target.value : 이벤트를 발생한 시점의 수정된 값.
    // item.title : 부모로부터 받아온 아이템 에 대입.
    // item.title = e.target.value;
    // editItem(); // 부모 App 에서 받아온 edititem 호출.
    setItem({ ...item, title: e.target.value });
  };

  // check box 전환 함수. 값에 반영이 되게 한다.
  const checkboxEventHandler = (e) => {
    // e.target.checked : 이벤트가 발생한 시점의 수정된 체크 값
    // item. 들의 done값을 해당 값으로 설정한다.

    // check box의 경우 체크 상태가 바뀔 때마다 edit item을 호출한다.
    item.done = e.target.checked;
    // 이것이 없으면 내부적으로는 값이 바뀌지만 화면 리렌더링이 안되어 화면에는 변화가 없다.
    // 화면에 변화가 없는 경우 리렌더링 여부를 확인해보자.
    editItem(item); // 부모 App 에서 받아온 editItem 을 호출하여 갱신된 item배열을 다시 넣는다. -> 리렌더링
  };

  return (
    <ListItem>
      {/* 체크박스 부분 */}
      <Checkbox
        checked={item.done}
        onChange={checkboxEventHandler} // 체크박스 값이 수정될 때 값을 저장하는 함수를 호출한다.
      />
      <ListItemText>
        {/* 머터리얼에서 입력을 위한 가장 간단한 것 inputBase */}
        <InputBase
          inputProps={{ "aria-label": "naked", readOnly: readOnly }}
          onClick={turnOffReadOnly} // 클릭 시 readOnly가 false가 된다.
          onKeyDown={turnOnReadOnly} // 키 눌리면 true가 된다.
          onChange={editEventHandler} // 값이 바뀔때마다 호출된다.
          type="text"
          id={item.id}
          name={item.id}
          value={item.title} //아이템에 타이틀이 보여지게됨. 수정 시 갱신된 title이 보이게 된다.
          // 아이템은 투두컴포넌트의 상태변수
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        {/* 삭제 버튼. deleteEventHandler와 연결한다. */}
        <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
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
