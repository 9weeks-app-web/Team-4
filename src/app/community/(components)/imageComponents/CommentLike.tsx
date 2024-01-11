import React, { useState } from 'react';
import Image from 'next/image';

const CommentLikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(prevIsLiked => !prevIsLiked);
  };

  return (
    <Image
      src={
        isLiked
          ? '/images/community/commentLike_hover.png'
          : '/images/community/commentLike.png'
      }
      alt="Like Button"
      width={48}
      height={48}
      className="mr-3 transition duration-300 ease-in-out cursor-pointer"
      onClick={handleLikeClick}
    />
  );
};

export default CommentLikeButton;
