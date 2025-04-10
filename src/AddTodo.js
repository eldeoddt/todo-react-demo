import React, {useState} from "react";

import {Button, Grid, TextField} from "@mui/material";

const AddTodo = (props) => {
    //  
    const [item, setItem] = useState({title: ""});

    // 부모로부터 props로 addItem을 받아와서 저장한다.
    const addItem = props.addItem;

    // onButtonClick 함수.
    // 
    const onButtonClick = () => {
        addItem(item); //addItem 함수
        setItem({title: ""});
    }

    // enterKey handler
    // textfiled에 연결한다. onkeypress 로 연결.
    const enterKeyEventHandler = (e) => {
        if (e.key == 'Enter'){
            onButtonClick();
        }
    };

    // onInputChange 함수
    const onInputChange = (e) => {
        setItem({title: e.target.value});
        console.log(item);
    };

    return(
        <Grid container style={{marginTop:20}}>
            <Grid xs={11} md={11} lg={6} item style={{paddingRight: 16}}>
                <TextField placeholder="Add Todo here" fullWidth
                onChange={onInputChange} onKeyPress={enterKeyEventHandler} value={item.title}
                />
                {/* 입력할때마다 state변수에 값이 담긴다. */}
            </Grid>
            {/* lg={6} 으로 하면 입력창 버튼 비율이 1대1 6칸씩 된다. */}
            {/* 버튼 onClick 시 onButtonClick을 호출하도록 한다. */}
            <Grid xs={1} md={1} lg={6} item>
                <Button fullWidth style={{height: '100%'}} 
                color="secondary" variant="contained" onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;