import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const PostCardContent = ({ postData }) => (
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        return (
          <Link href={`/hashtag/${v.slice(1)}`} key={i}>
            {/* 사용자가 의도를 가지고 데이터를 바꾸는 경우(게시글 수정)가 아닌 이상 postData는 바뀔 일이 없음!
                사용자가 데이터를 수정할 경우, 그에따라 화면도 같이 리렌더링되기 때문에 노상관임
                이러한 상황에서는 index를 key로 써도 괜찮음!
             */}
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
);

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
