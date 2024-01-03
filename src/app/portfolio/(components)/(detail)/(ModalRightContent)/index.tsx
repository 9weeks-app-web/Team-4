'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ModalRightComment from './CommentContainer';
import { PortfolioPageCategory } from '@/types/portfolio';

const ModalRightContent = ({
  portfolioId,
  portfolioTitle,
  userId,
  userNickname,
  userProfile,
  setModalMargin,
  job,
}: {
  portfolioId: number;
  portfolioTitle: string;
  userId: number;
  userNickname: string;
  userProfile: string;
  job: PortfolioPageCategory;
  setModalMargin: Dispatch<SetStateAction<string>>;
}) => {
  const [commentHandler, setCommentHandler] = useState<boolean>(false);
  useEffect(() => {
    if (commentHandler) {
      setModalMargin('my-auto ml-[165px]');
    } else {
      setModalMargin('m-auto');
    }
  }, [commentHandler, setModalMargin]);
  return (
    <div
      className={`flex flex-col text-neutral-0 ${
        commentHandler ? 'w-[360px] ml-[30px]' : 'w-[90px] right-[248px]'
      }  fixed`}
    >
      {commentHandler ? (
        <div className="w-[360px] min-h-[500px] bg-neutral-0 rounded-xl">
          <ModalRightComment
            profileImg={userProfile}
            setCommentHandler={setCommentHandler}
            portfolioId={portfolioId}
            portfolioTitle={portfolioTitle}
            userId={userId}
            userNickname={userNickname}
            job={job}
          />
        </div>
      ) : (
        <>
          <div className="w-full mb-[32px] flex items-center flex-col">
            <div className="w-[72px] rounded-full overflow-hidden relative h-[72px] flex items-center justify-center bg-neutral-0">
              <Image
                src={userProfile}
                alt="유저 프로필 이미지"
                width={72}
                height={72}
              />
            </div>
            <div className="-tracking-[.96px] w-full flex justify-center mt-[11px] font-medium text-base">
              프로필
            </div>
          </div>
          <div className="w-full mb-[32px] flex items-center flex-col">
            <div className="w-[72px] rounded-full overflow-hidden relative  h-[72px] flex items-center justify-center  bg-neutral-0">
              <Image
                src="/portfolios/paper.svg"
                alt="제안하기"
                width={32}
                height={32}
              />
            </div>
            <div className="w-full flex justify-center mt-[11px] font-medium text-base">
              제안하기
            </div>
          </div>
          <div className="w-full mb-[32px] flex items-center flex-col">
            <div className="w-[72px] rounded-full overflow-hidden relative  h-[72px] flex items-center justify-center  bg-neutral-0">
              <Image
                src="/portfolios/folder.svg"
                alt="컬렉션"
                width={32}
                height={32}
              />
            </div>
            <div className="w-full flex justify-center mt-[11px] font-medium text-base">
              컬렉션
            </div>
          </div>
          <div className="w-full mb-[32px] flex items-center flex-col">
            <div className="w-[72px] rounded-full overflow-hidden relative  h-[72px] flex items-center justify-center  bg-neutral-0">
              <Image
                src="/portfolios/share.svg"
                alt="공유하기"
                width={32}
                height={32}
              />
            </div>
            <div className="w-full flex justify-center mt-[11px] font-medium text-base">
              공유하기
            </div>
          </div>
          <div className="w-full mb-[32px] flex items-center flex-col">
            <div className="w-[72px] rounded-full overflow-hidden relative  h-[72px] flex items-center justify-center bg-[#FFBE5C]">
              <Image
                src="/portfolios/star.svg"
                alt="한 줄 피드백"
                width={32}
                height={32}
              />
            </div>
            <div className="-tracking-[.96px] w-full flex justify-center mt-[11px] font-medium text-base">
              한 줄 피드백
            </div>
          </div>
          <button
            onClick={() => {
              setCommentHandler(prev => !prev);
            }}
            className="w-full mb-[32px] flex items-center flex-col"
          >
            <div className="w-[72px] rounded-full overflow-hidden relative  h-[72px] flex items-center justify-center bg-primary-80">
              <Image
                src="/portfolios/comment.svg"
                alt="코멘트"
                width={32}
                height={32}
              />
            </div>
            <div className="w-full flex justify-center mt-[11px] font-medium text-base">
              코멘트
            </div>
          </button>
          <div className="w-full mb-[32px] flex items-center flex-col">
            <div className="w-[72px] rounded-full overflow-hidden relative  h-[72px] flex items-center justify-center bg-[#FF5171]">
              <Image
                src="/portfolios/modal_like.svg"
                alt="좋아요"
                width={32}
                height={32}
              />
            </div>
            <div className="w-full flex justify-center mt-[11px] font-medium text-base">
              좋아요
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ModalRightContent;
