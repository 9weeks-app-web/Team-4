import { CommunityDetail } from '@/types/community';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface CardProps {
  dummy: CommunityDetail;
  category: string;
}
const Card: React.FC<CardProps> = ({ dummy, category }) => {
  const [likeHovered, setLikeHovered] = useState(false);
  const [chatHovered, setChatHovered] = useState(false);
  const [eyeHovered, setEyeHovered] = useState(false);

  return (
    <div className=" p-5 mb-4 rounded-2xl border border-neutral-5 text-sm w-[483px] h-[262px]">
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
          {new Date(dummy.createdAt).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
          })}
        </div>
      </div>
      <Link href={`/community/${category}/${dummy.id}`}>
        <div className="mb-5">
          <div className=" font-bold text-lg mb-2">{dummy.title}</div>
          <div className=" line-clamp-2 text-sm text-neutral-80 h-11">
            {dummy.content}
          </div>
        </div>
      </Link>

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
              className={`${
                likeHovered ? 'text-hover-red' : ''
              } text-sm font-medium`}
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
              src={
                chatHovered
                  ? '/images/community/chat_hover.png'
                  : '/images/community/chat.png'
              }
              alt="Star Image"
              width={24}
              height={24}
              className="mr-[6px]"
            />
            <div
              className={`${
                chatHovered ? 'text-hover-green' : ''
              } text-sm font-medium`}
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
              src={
                eyeHovered
                  ? '/images/community/eye_hover.png'
                  : '/images/community/eye.png'
              }
              alt="Eye Image"
              width={24}
              height={24}
              className="mr-[6px]"
            />
            <div
              className={` ${
                eyeHovered ? ' text-hover-purple' : ''
              } text-sm font-medium`}
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
