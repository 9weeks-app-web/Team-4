import { CommunityDetail } from '@/types/community';
import Image from 'next/image';
import { useState } from 'react';

export interface CardProps {
  dummy: CommunityDetail;
}
const Card: React.FC<CardProps> = ({ dummy }) => {
  const [likeHovered, setLikeHovered] = useState(false);
  const [chatHovered, setChatHovered] = useState(false);
  const [eyeHovered, setEyeHovered] = useState(false);
  return (
    <div className=" p-5 mb-4 rounded-2xl border border-neutral-5 text-sm">
      <div className="flex justify-between mb-[13px]">
        <div className="flex items-center">
          <Image
            src={dummy.profileImg}
            alt={dummy.nickname}
            width={24}
            height={24}
            className="mr-[6px] w-[24px] h-[24px] rounded-full "
          />
          <div className=" text-neutral-60 text-sm">{dummy.nickname}</div>
        </div>
        <div className=" text-neutral-30 text-sm">
          {dummy.createdAt.toISOString().split('T')[0]}
        </div>
      </div>
      <div className="mb-5">
        <div className=" font-bold text-lg mb-2">{dummy.title}</div>
        <div className=" line-clamp-2 text-sm text-neutral-80">
          {dummy.content}
        </div>
      </div>

      <div className="flex mb-5">
        {dummy.tags?.map((tag, index) => (
          <div
            key={index}
            className="mr-2 bg-neutral-5 text-neutral-60 py-[6px] px-[10px] text-xs rounded-3xl"
          >
            {tag}
          </div>
        ))}
        {!dummy.tags?.length && <div className="h-8  rounded-3xl"></div>}
      </div>

      <div className="flex justify-center items-center border rounded-lg border-neutral-10 p-[10px] h-11">
        <div className="flex items-center text-neutral-60 h-[33px]">
          <div
            className="flex items-center mr-3 px-[14px] cursor-pointer"
            onMouseEnter={() => setLikeHovered(true)}
            onMouseLeave={() => setLikeHovered(false)}
          >
            <Image
              src={likeHovered ? '/images/like_hover.png' : '/images/like.png'}
              alt="Star Image"
              width={24}
              height={24}
              className="mr-[6px] transition duration-300 ease-in-out"
            />

            <div
              className={`${
                likeHovered ? 'text-hover-red' : ''
              } text-sm text-neutral-60 font-medium`}
            >
              {dummy.likes}
            </div>
          </div>
          <div
            className="flex items-center mr-3 px-[14px] cursor-pointer"
            onMouseEnter={() => setChatHovered(true)}
            onMouseLeave={() => setChatHovered(false)}
          >
            <Image
              src={chatHovered ? '/images/chat_hover.png' : '/images/chat.png'}
              alt="Star Image"
              width={24}
              height={24}
              className="mr-[6px]"
            />
            <div
              className={`${
                chatHovered ? 'text-hover-green' : ''
              } text-sm text-neutral-60 font-medium`}
            >
              {dummy.commentCounts}
            </div>
          </div>
          <div
            className="flex items-center px-[14px] cursor-pointer"
            onMouseEnter={() => setEyeHovered(true)}
            onMouseLeave={() => setEyeHovered(false)}
          >
            <Image
              src={eyeHovered ? '/images/eye_hover.png' : '/images/eye.png'}
              alt="Eye Image"
              width={24}
              height={24}
              className="mr-[6px]"
            />
            <div
              className={` ${
                eyeHovered ? ' text-hover-purple' : ''
              } text-sm text-neutral-60 font-medium`}
            >
              {dummy.hits}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
