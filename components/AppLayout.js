// AppLayout.js : 일부가 공통인 것들을 처리

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* 원칙 */}
        {/* 1. 가로먼저 자르고 -> 세로 자른다  */}
        {/* 2. 반응형 디자인시에 모바일 -> 데스크탑 순으로 디자인 */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/bisous1519"
            target="_blank"
            rel="noreferrer noopener" // target _blank시, rel="noreferer noopener" 가 있어야 보안위협이 사라짐
          >
            eomji&apos;s github
          </a>
        </Col>
        {/* xs: 모바일, sm: 테블릿, md: 작은 데스크탑 lg/xl: 대화면 */}
        {/* cf> https://ant.design/components/grid/ */}
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  // children은 node타입 (react의 node(:화면에그릴수있는모든것들) o / node.js의 node x)
};

export default AppLayout;
