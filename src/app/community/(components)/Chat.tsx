// Chat.tsx

import React from 'react';

interface ChatProps {
  category: string;
}

const Chat: React.FC<ChatProps> = ({ category }) => {
  return (
    <div className="border flex flex-col justify-between h-44 p-4 rounded-xl">
      <div className="font-bold text-2xl justify-end">{category}</div>
      <div className="self-end">채팅하기</div>
    </div>
  );
};

export default Chat;
