# MongoDB_JPA_Start04 Client UI
## Issues
- ReactJS + Redux를 기반으로 한 AJAX 비동기 통신을 접목한 로그인 방법을 알아봅니다.
- ReactJS에서 SockJS를 접목 시켜서 실시간 채팅 서비스를 구현합니다.
- React Router를 기반으로 사용자 인터페이스에 대한 조정을 하는 연습을 진행합니다.
- 이는 ReactJS + Redux를 기반으로 작성을 하였습니다.
- 간단한 Login에 대해서는 Redux를 이용해서 AJAX(axios 활용) 통신을 이용해서 적용하도록 하였습니다.
- Login 이후에 Chatting에 대해서는 Redux로 접목하기에는 어려울 것으로 느낄 것 같아 순수 ReactJS를 기반으로 작성하였습니다.

## Using Server
- Server는 Spring Boot를 기반으로 연동을 할 수 있도록 적용하였습니다.
- 추후에 Node.js에서 `mongoose`를 활용하는 방법에 대해서도 작성을 진행하겠습니다.
- Spring Boot는 Spring Data MongoDB를 기반으로 전송하는 REST API를 이용하였습니다.

## NPM Libraries
소스 코드를 실행하기 전에 NPM에 아래와 같은 라이브러리들이 있는지 확인을 하고 `npm build`를 진행하시길 바랍니다.
- `react` - React Application 생성 및 Component 이용.
- `react-router-dom` - React Router를 DOM을 이용해서 적용하기 위해 이용.
- `react-redux`  `redux`  `redux-promise` - React에서 Redux를 적용하기 위해 이용.
- `redux-form` - Redux를 기반으로 input form에서 데이터를 state 변동을 적용하기 위해 이용.
- `sockjs-client` - SockJS를 기반으로 EchoHandler에 접목할 수 있도록 이용.
- `axios` - AJAX를 기반으로 비동기 통신을 적용하기 위해 이용.
- `jwt-decode` - JWT Token에 대해 복호화를 해 사용자 정보를 얻기 위해 이용.

## Screenshots & Study Docs
[참조하기](https://github.com/tails5555/mongoDB_JPA_Start04)

## Author
- [강인성](https://github.com/tails5555)