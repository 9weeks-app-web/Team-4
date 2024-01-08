import React, { useState } from 'react';
import Image from 'next/image';

interface LikeButtonProps {
  postLikes: number;
  onLikeClick?: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ postLikes, onLikeClick }) => {
  const [likeHovered, setLikeHovered] = useState(false);

  return (
    <div
      className="flex items-center cursor-pointer px-[77px] py-[11px] rounded-lg hover:bg-background-pike relative"
      onMouseEnter={() => setLikeHovered(true)}
      onMouseLeave={() => setLikeHovered(false)}
      onClick={onLikeClick}
    >
      <Image
        src={
          likeHovered
            ? '/images/community/like_hover.png'
            : '/images/community/like.png'
        }
        alt="Star Image"
        width={24}
        height={24}
        className="mr-[6px] transition duration-300 ease-in-out"
      />

      <div
        className={`${likeHovered ? 'text-hover-red' : ''} text-sm font-medium`}
      >
        {postLikes}
      </div>
    </div>
  );
};

export default LikeButton;
