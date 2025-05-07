import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { signin } from "./service/ApiService";

const Login = () => {
  const handleSubmit = (event) => {
    // default submit의 동작을 막는다. 페이지 새로고침 방지.
    event.preventDefault();

    // 이벤트가 발생한 form의 모든 입력값을 수집한다.
    // 해당 form 안의 input 값을 key(name)-value 객체로 변환한다.
    const data = new FormData(event.target);
    // username 입력값을 추출한다.
    const username = data.get("username");
    const password = data.get("password");

    // apiservice의 signin 메서드를 사용하여 로그인한다.
    signin({ username: username, password: password });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {" "}
        {/* subimt 버튼 누르면 handleSubmit이 실행된다. */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="아이디"
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="패스워드"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
