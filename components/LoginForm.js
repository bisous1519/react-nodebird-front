import React, { useCallback, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
// import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  // useCallback : 함수를 캐싱하는 것
  // 컴포넌트의 props로 넘겨주는 함수는 useCallback을 써주어야 최적화가됨!
  const onSubmitForm = useCallback(() => {
    // onFinish는 e.preventdefault가 이미 적용되어있음
    console.log(id, password);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  // useMemo : 값을 캐싱하는 것
  // 여기서 useMemo를 사용하지 않으면 -> {} !== {} 이므로, 같은 값임에도 리렌더링되는데
  // 이렇게하면 같은 객체가 유지되므로 쓸데없이 리렌더링 되지않는다! 최적화가됨!
  const style = useMemo(() => ({ marginTop: 10 }), []);

  return (
    // return 부분 === Virtual DOM (VDOM)
    // 이 부분을 한번은 일단 그려줌.
    // 이후부터는 -> 이전 컴포넌트의 버츄얼돔과 이번 컴포넌트의 버츄얼돔을 비교해서
    // 달라진 부분만 다시그림.
    <FormWrapper onFinish={onSubmitForm}>
      {/* form이 submit되면 onFinish가 호출됨 */}
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper style={style}>
        <Button type="primary" htmlType="submit" loading={false}>
          {/* button에 htmlType="submit"을 붙여줘야 form이 submit됨 */}
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// LoginForm.propTypes = {
//   setIsLoggedIn: PropTypes.func.isRequired,
// };

export default LoginForm;
