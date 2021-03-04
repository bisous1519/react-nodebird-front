import { all, fork, call, put } from "redux-saga/effects";

/*
    제너레이터 : 함수의 일종
    const gen() = function*() {
      console.log(1);
      yield;
      console.log(2);
      yield;
      console.log(3);
      yield 4;
    }
    const generator = gen();
    generator.next() 해서 실행할 수 있음.
    실행때마다 1, 2, 3이 나옴
    -> 제너레이터는 중단점(yield)이 있는 곳에서 멈추는 함수다!!
*/
export default function* rootSaga() {
  yield all([fork(watchLogin)]);
}
