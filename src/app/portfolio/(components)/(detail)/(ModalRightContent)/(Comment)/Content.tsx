'use client';

import dateFormat from '@/utils/dateFormat';
import Image from 'next/image';
import { useState } from 'react';
import CommentInput from './Input';
import useScroll from '@/hooks/useScroll';

const RightContentComment = ({
  userId,
  nickname,
  job,
  profile,
  createAt,
  content,
  bookmarks = [],
}: {
  userId: number;
  nickname: string;
  job: string;
  profile: string;
  content: string;
  createAt: Date;
  bookmarks?: string[];
}) => {
  const [reply, setReply] = useState(false);
  const { moveToSection } = useScroll();
  return (
    <div
      className={`w-[310px] ${
        reply ? `min-h-[400px]` : `min-h-[207px]`
      }  py-[32px]`}
    >
      <div className="flex w-full h-[45px]">
        <div className="flex justify-center items-center w-[24px] h-full mr-[10px]">
          <Image
            src={profile}
            alt="사용자 프로필"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <div className="">
          <div className="text-neutral-80">{nickname}</div>
          <div className="text-neutral-40">
            {job}
            {' ・ '}
            {dateFormat(createAt)}
          </div>
        </div>
      </div>
      <div className="py-[9px] mt-[10px] mb-[6px]">
        {bookmarks.length > 0 && (
          <div className="w-full flex my-[16px]">
            {bookmarks.map((e, index) => (
              <button
                onClick={() => {
                  moveToSection(e);
                }}
                key={index}
                className="py-[12px] px-[20px] rounded-full border border-neutral-10 mr-[8px]"
              >
                {e}
              </button>
            ))}
          </div>
        )}
        <div className="text-base font-normal text-neutral-70 -tracking-[.96px] ">
          {content}
        </div>
      </div>
      <div className="flex mb-[32px]">
        <button className="p-[10px]">
          <Image
            src="/portfolios/thumbs_up.svg"
            alt="따봉"
            width={16}
            height={16}
          />
        </button>
        {reply ? (
          <button
            onClick={() => {
              setReply(prev => !prev);
            }}
            className="text-sm w-[49px] h-[36px] border border-stroke-10 px-[6px] flex justify-center items-center rounded-full"
          >
            취소
          </button>
        ) : (
          <button
            className="p-[10px] ml-[6px]"
            onClick={() => {
              setReply(prev => !prev);
            }}
          >
            <Image
              src="/portfolios/reply.svg"
              alt="답글"
              width={16}
              height={16}
            />
          </button>
        )}
      </div>
      <div>{reply && <CommentInput userId={userId} reComment={true} />}</div>
    </div>
  );
};

export default RightContentComment;
