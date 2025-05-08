import { API_BASE_URL } from "../app-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 Access token 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    // 헤더에 토큰을 추가한다.
    headers.append("Authorization", "Bearer " + accessToken);
  }
  let options = {
    headers: headers,
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
    // console.log("response: ", response);
    // alert("로그인 토큰: " + response.token);
    if (response.token) {
      // 로컬 스토리지에 토큰 저장
      localStorage.setItem("ACCESS_TOKEN", response.token);
      // token 존재하는 경우 todo 화면으로 리다이렉트한다.
      window.location.href = "/";
    }
  });
}

// 로그아웃 요청 함수
export function signout() {
  localStorage.setItem("ACCESS_TOKEN", null);
  window.location.href = "/login";
}

// 회원가입 요청 함수
export function signup(userDTO) {
  return call("/auth/signup", "POST", userDTO);
}