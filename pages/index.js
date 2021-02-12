//import React from 'react'; // Next는 이 구문이 필요 x (있어도 상관없똥)
import AppLayout from "../components/AppLayout";

// Next는 pages폴더를 인식 -> 안에 있는 파일들을 개별적인, 코드스플리팅 된 페이지 컴포넌트로 만들어줌
// ㄴ cf> 리액트는 router, 서버사이드 렌더링을 따로 설정 해줬어야했음
// ㄴ ex> index : "~/"
//        profile : "~/profile"
// index 페이지 : "localhost:3000/" 했을때의 페이지
// 실행 :  npm run dev (: package.json 안의 scripts 안의 'dev'명령어를 실행시켜줌 -> 현재, dev가 next로 되어있음!)

const Home = () => {
  return (
    <AppLayout>
      <div>Hello, Next!</div>
    </AppLayout>
  );
};
export default Home;

// localhost:3000/
