import dateFormat from '@/utils/dateFormat';
import Image from 'next/image';
import { useState } from 'react';
import CommentInput from './Input';

const RightContentReComment = ({
  nickname,
  job,
  profile,
  createAt,
  content,
  userId,
}: {
  nickname: string;
  job: string;
  profile: string;
  createAt: Date;
  content: string;
  userId: number;
}) => {
  const [reply, setReply] = useState(false);
  return (
    <div
      className={`w-[310px] ${
        reply ? `h-[400px]` : `h-[207px]`
      } py-[32px] pl-20`}
    >
      <div className="flex w-full h-[45px]">
        <div className="flex justify-center items-center w-[24px] h-full mr-[10px]">
          <Image
            src={profile}
            className="rounded-full"
            alt="사용자 프로필"
            width={24}
            height={24}
          />
        </div>
        <div className="w-full">
          <div className="text-neutral-80 w-full">{nickname}</div>
          <div className="text-neutral-40 w-full text-sm">
            {job}
            {' ・ '}약 2시간 전
          </div>
        </div>
      </div>
      <div className="py-[9px] w-full mt-[10px] mb-[12px]">
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

export default RightContentReComment;
