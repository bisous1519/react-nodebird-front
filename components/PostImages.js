import PropTypes from "prop-types";
import { useCallback, useState } from "react";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        {/* role="presentation" 이 있으면
            스크린 리더가 -> '이거 클릭할 수는 있지만 굳이 클릭할 필요는 없어!' 라고 알아들음. */}
      </>
    );
  }
  return <div>구현중..</div>;
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
