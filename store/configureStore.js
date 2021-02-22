import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

const configureStore = () => {
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware([])) // 배포용일때.
      : composeWithDevTools(applyMiddleware([])); // 개발용일때. (redux-devtools-extension 쓸 수 있음)
  const store = createStore(reducer, enhancer);
  return store;
  // store : state와 reducer를 포함하는 것
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;

// ** Redux를 사용하는 이유 **
// 1) 여러 컴포넌트들에서 공통적으로 쓰이는 데이터(ex> 로그인 한 유저)를
//    매번 부모 컴포넌트에서 자식 컴포넌트로 일일히 뿌려줘야 하는 번거로움을 없애기 위해.
//    redux : 중앙 저장소 역할
//    --> 중앙에서 하나로 관리해서 컴포넌트들에 뿌려주는 역할을 함.
//    --> cf> context API, redux, mobx, (graphql의)apollo
// 2) history 관리를 위해.
//    reducer에서 return시, ...state를 통해 불변성을 지켜낸 "새로운 객체를 만들어 반환"하면
//    이전 기록과 다음 기록이 둘 다 남게 되어 history를 관리할 수 있다
//    +> 새로운 객체를 반환하는 이유 :
//       --> prev = {name: 'zerocho'} 일 때,
//           next = prev;
//           next.name = 'boogicho'; 하면
//           next가 참조하고 있는 prev.name 또한 'boogicho'로 바뀌기 때문에
//           과거에 어떤 데이터에서 현재 어떤 데이터로 바뀌었는지를 알 수 없어짐!
//    +> 스프레드 연산자를 사용하는 이유 :
//       --> 메모리를 아끼기 위해. 바뀔 데이터는 바꿔주고, 참조관계를 유지해도 상관없는 데이터는 유지.

// ** 좋은점 **
// redux dev tools 사용!
// - action하나하나가 redux에 기록되기 때문에 버그 잡기나 테스트가 편리함
// - 타임머신 역할을 해서 거꾸로 거슬러 올라가볼 수 있음

// ** 단점 **
// switch문이 길어짐
