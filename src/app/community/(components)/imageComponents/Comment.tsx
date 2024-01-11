import React, { useState } from 'react';
import Image from 'next/image';

interface CommenButtonProps {
  onClick: () => void;
  isCommentOpen: boolean;
}

const CommentButton: React.FC<CommenButtonProps> = ({
  onClick,
  isCommentOpen,
}) => {
  return (
    <Image
      src={
        isCommentOpen
          ? '/images/community/comment_hover.png'
          : '/images/community/comment.png'
      }
      alt="Comment Button"
      width={48}
      height={48}
      className="mr-3 transition duration-300 ease-in-out cursor-pointer"
      onClick={onClick}
    />
  );
};

export default CommentButton;
