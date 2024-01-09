'use client';
import { useState } from 'react';

const ChatRoom = () => {
  const jobCategories: string[] = [
    'UX/UI 디자인',
    '서비스 기획',
    '웹 디자인',
    '편집 디자인',
  ];
  const [activeJobChatCategory, setActiveJobChatCategory] =
    useState('UX/UI 디자인');
  return (
    <div className=" my-8">
      <div className=" font-bold text-[28px] mb-4">직무별 채팅방</div>

      <div className="flex">
        {jobCategories.map(category => (
          <button
            key={category}
            className={`flex justify-center items-center h-[52px] mr-[10px] px-5 py-4 border text-lg ${
              category === activeJobChatCategory
                ? 'bg-primary-20 border-primary-70 text-primary-70 font-bold'
                : 'border-neutral-10 text-neutral-60'
            } rounded-full`}
            onClick={() => setActiveJobChatCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
