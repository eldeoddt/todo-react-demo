import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, Box } from "@mui/material";

function Copyright() {
  return (
    // Typography : 폰트 색깔 등을 지정하는 컴포넌트이다. 폰트는 body2
    <Typography variant="body2" color="textSecondary" align="ceter">
      {"Copyright "} {/* 텍스트 그대로 출력된다. */}
      fsortwareengineer, {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// BrowserRouter: 브라우저 히스토리 지원하여 뒤로가기 작동해주는 리액트 라우터이다.
// Routes: 여러 개 route 관리, 적합한 route를 찾아줌.
// Route : path 요청이 오면 element의 컴포넌트를 렌더링한다.

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}

export default AppRouter;
