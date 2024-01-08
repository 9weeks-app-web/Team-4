import React, { useState } from 'react';
import Image from 'next/image';

interface ChatButtonProps {
  commentCounts: number;
}

const ChatButton: React.FC<ChatButtonProps> = ({ commentCounts }) => {
  const [chatHovered, setChatHovered] = useState(false);

  return (
    <div
      className="flex items-center cursor-pointer px-[77px] py-[11px] rounded-lg hover:bg-background-green"
      onMouseEnter={() => setChatHovered(true)}
      onMouseLeave={() => setChatHovered(false)}
    >
      <Image
        src={
          chatHovered
            ? '/images/community/chat_hover.png'
            : '/images/community/chat.png'
        }
        alt="Chat Image"
        width={24}
        height={24}
        className="mr-[6px]"
      />
      <div
        className={`${
          chatHovered ? 'text-hover-green' : ''
        } text-sm font-medium`}
      >
        {commentCounts}
      </div>
    </div>
  );
};

export default ChatButton;
