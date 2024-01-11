'use client';
import { useEffect, useState } from 'react';
import ChatDummy from '../api/community/(dummys)/chat';
import ChatRoomCard from './(components)/ChatRoomCard';
import { ChatCard } from '../types/chat';
import SelectedChatCard from './(components)/SelectedChatCard';
import SelectedChatRoomCard from './(components)/SelectedChatRoomCard';

const ChatRoom = () => {
  const jobCategories: string[] = [
    'UX/UI',
    '서비스 기획',
    '웹 디자인',
    '편집 디자인',
  ];
  const involved: string[] = ['참여중', '둘러보기'];

  const [activeJobChatCategory, setActiveJobChatCategory] = useState('UX/UI');
  const [activeInvolved, setActiveInvolved] = useState('참여중');
  const [selectedChat, setSelectedChat] = useState<ChatCard | null>(null);

  const filteredJobChatDummys = ChatDummy.filter(job => {
    return job.tag === activeJobChatCategory && job.involved === activeInvolved;
  });
  const handleChatCardClick = (chat: ChatCard) => {
    setSelectedChat(chat);
  };

  useEffect(() => {
    if (activeInvolved === '참여중' || activeInvolved === '둘러보기') {
      setSelectedChat(null);
    }
  }, [activeInvolved]);

  return (
    <div className=" my-8">
      <div className=" font-bold text-[28px] mb-4">직무별 채팅방</div>

      <div className="flex mb-[30px]">
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
      <div className="flex">
        <div className="w-[380px] h-[709px] p-5 border border-neutral-10 rounded-[20px] mr-[30px]">
          <div className="flex mb-5">
            {involved.map(category => (
              <button
                key={category}
                className={`flex justify-center items-center mr-[10px] px-2 py-[6px] border text-sm  font-semibold  ${
                  category === activeInvolved
                    ? ' border-neutral-10 text-neutral-70 bg-neutral-5'
                    : 'border-neutral-10 text-neutral-80'
                } rounded-md`}
                onClick={() => setActiveInvolved(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="w-[341px] h-[605px]">
            {filteredJobChatDummys.map(job => (
              <ChatRoomCard
                key={job.id}
                dummy={job}
                onClick={() => handleChatCardClick(job)}
              />
            ))}
          </div>
        </div>

        {selectedChat && activeInvolved === '둘러보기' ? (
          <SelectedChatCard selectedChat={selectedChat} />
        ) : activeInvolved === '참여중' ? (
          selectedChat ? (
            <SelectedChatRoomCard selectedChat={selectedChat} />
          ) : (
            <SelectedChatRoomCard selectedChat={filteredJobChatDummys[0]} />
          )
        ) : (
          <div className="flex justify-center items-center p-[30px] w-[585px] border border-neutral-10 rounded-[20px] text-neutral-80 font-medium text-lg">
            <div className="text-center">
              좌측의 채팅방 리스트에서
              <br /> 참여하고 싶은 채팅방을 클릭해 주세요.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
