import { Button, Form, Input } from "antd";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.User.me?.id); // 로그인 안해서 me가 없는 상황 대비
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.Textarea
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
