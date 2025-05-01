import { API_BASE_URL } from "../app-config";

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    // get method
    options.body = JSON.stringify(request);
  }
  // 이 fetch 함수가 백엔드로 요청한다.
  return fetch(options.url, options)
    .then((response) => {
      if (response.status === 200) {
        // 200이면 기본 화면 반환
        return response.json();
      } else if (response.status === 403) {
        window.location.href = "/login"; // 403이면 로그인 화면으로 리다이렉트
      } else {
        Promise.reject(response); // 예외인 경우
        throw Error(response); // 오류 발생
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}

// 로그인 요청 함수
export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO)
    .then((response) => {
    console.log("response: ", response);
    alert("로그인 토큰: " + response.token);
  });
}