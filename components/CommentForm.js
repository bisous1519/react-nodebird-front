import { Button, Form, Input } from "antd";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id); // 로그인 안해서 me가 없는 상황 대비
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        {/* inline 스타일이 좋은건 아니지만, 그렇다고 굳이 모든걸 섣불리 최적화해줄 필요는 x (성능에 문제가 생기기 전까진)
            왜냐면 얘네를 모두 useMemo로 빼주기엔 너무 많아! */}
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button type="primary" htmlType="submit">
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;

CommentForm.propTypes = {
  post: PropTypes.node.isRequired,
};
