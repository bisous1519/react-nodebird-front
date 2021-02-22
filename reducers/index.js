// redux! 중앙 저장소!

import { HYDRATE } from "next-redux-wrapper";
// get initial props 대신, get static props와 get serverside props 가 생겨서 serverside rendering이 달라짐에 인해 HYDRATE가 필요하게됨

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPsts: [],
  },
};

// action creator
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

// rootReducer : 이전상태와 액션을 가지고 => 다음상태를 만들어내는 함수
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return {
        ...state,
        ...action.payload,
      };
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;

// cf> npm i redux-devtools-extension 이게 있어야 브라우저의 개발자 도구와 연동이 됨
