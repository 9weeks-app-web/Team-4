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
  return (
    <Link href="/community/category/1">
      <div className="flex">
        <div className="flex justify-center items-center min-w-[33px] w-[33px] h-[33px] mr-3 rounded-md bg-primary-80 text-neutral-0">
          {index}
        </div>
        <div>
          <div className="mb-2 py-[6px] px-2 bg-neutral-5 inline-block rounded-md text-neutral-60 font-semibold">
            {dummy.category}
          </div>
          <div className="mb-2 text-lg font-bold line-clamp-1 text-neutral-80">
            {dummy.title}
          </div>
          <div className="mb-3 text-sm line-clamp-2 text-neutral-80 font-normal">
            {dummy.content}
          </div>
          <div className="flex items-center">
            <div
              className="flex items-center mr-5 cursor-pointer"
              onMouseEnter={() => setLikeHovered(true)}
              onMouseLeave={() => setLikeHovered(false)}
            >
              <Image
                src={
                  likeHovered ? '/images/like_hover.png' : '/images/like.png'
                }
                alt="Star Image"
                width={24}
                height={24}
                className="mr-[6px] transition duration-300 ease-in-out"
              />

              <div
                className={`${
                  likeHovered ? 'text-hover-red' : ''
                } text-sm text-neutral-40 font-medium`}
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
                  chatHovered ? '/images/chat_hover.png' : '/images/chat.png'
                }
                alt="Star Image"
                width={24}
                height={24}
                className="mr-[6px]"
              />
              <div
                className={`${
                  chatHovered ? 'text-hover-green' : ''
                } text-sm text-neutral-40 font-medium`}
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
                src={eyeHovered ? '/images/eye_hover.png' : '/images/eye.png'}
                alt="Eye Image"
                width={24}
                height={24}
                className="mr-[6px]"
              />
              <div
                className={` ${
                  eyeHovered ? ' text-hover-purple' : ''
                } text-sm text-neutral-40 font-medium`}
              >
                {dummy.hits}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotBoard;
