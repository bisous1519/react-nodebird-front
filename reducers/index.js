// redux! 중앙 저장소!

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
  }
};

export default rootReducer;
