import Link from 'next/link';
import Image from 'next/image';
import { CommunityDetail } from '@/types/community';
import { useState } from 'react';

interface HotBoardProps {
  dummy: CommunityDetail;
  index: number;
}

const HotBoard: React.FC<HotBoardProps> = ({ dummy, index }) => {
  const [likeHovered, setLikeHovered] = useState(false);
  const [chatHovered, setChatHovered] = useState(false);
  const [eyeHovered, setEyeHovered] = useState(false);

  let boardTitle = '';
  if (dummy.category === '자유주제') {
    boardTitle = 'freesubject';
  } else if (dummy.category === 'QnA') {
    boardTitle = 'qna';
  } else if (dummy.category === '직업별 게시판') {
    boardTitle = 'jobboard';
  }
  return (
    <div className="flex">
      <div className="flex justify-center items-center min-w-[33px] w-[33px] h-[33px] mr-3 rounded-md bg-primary-80 text-neutral-0">
        {index}
      </div>
      <div>
        <div className="mb-2 py-[6px] px-2 bg-neutral-5 inline-block rounded-md text-neutral-60 font-semibold">
          {dummy.category}
        </div>
        <Link href={`/community/${boardTitle}/${dummy.id}`}>
          <div className="mb-2 text-lg font-bold line-clamp-1 text-neutral-80">
            {dummy.title}
          </div>
          <div className="mb-3 text-sm line-clamp-2 text-neutral-80 font-normal">
            {dummy.content}
          </div>
        </Link>
        <div className="flex items-center text-neutral-40">
          <div
            className="flex items-center mr-5 cursor-pointer"
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
              } text-sm  font-medium`}
            >
              {dummy.likes}
            </div>
          </div>
          <div
            className="flex items-center mr-5 cursor-pointer"
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
              } text-sm  font-medium`}
            >
              {dummy.commentCounts}
            </div>
          </div>
          <div
            className="flex items-center cursor-pointer"
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
              } text-sm  font-medium`}
            >
              {dummy.hits}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotBoard;
