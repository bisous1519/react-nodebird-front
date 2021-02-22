// redux! 중앙 저장소!

import { HYDRATE } from "next-redux-wrapper";
// redux serverside rendering을 위해!
// get initial props 대신, get static props와 get serverside props 가 생겨서 serverside rendering이 달라짐에 인해 HYDRATE가 필요하게됨

import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

// rootReducer : 이전상태와 액션을 가지고 => 다음상태를 만들어내는 함수
const rootReducer = combineReducers({
  // HYDRATE를 위해 index reducer를 하나 더 추가해줌
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;

// cf> npm i redux-devtools-extension 이게 있어야 브라우저의 개발자 도구와 연동이 됨
