// _app.js : pages에서 공통되는 것들을 처리.

import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    <>
      {/* <Provider store={store}>
        next에서는 react-redux에 있는 Provider를 쓰지 않음!
        -> next-redux-wrapper에서 알아서 Provider로 감싸주기 때문에
           한번 더 감싸게 되면 중복이 발생됨*/}
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
