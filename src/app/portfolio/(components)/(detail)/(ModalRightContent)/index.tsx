'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ModalRightComment from './(Comment)/Container';
import { PortfolioPageCategory } from '@/types/portfolio';
import ModalWrapper from '../../../../../components/(Modal)';
import PortfoliosCollection from './(Collection)/Collection';
import useScroll from '@/hooks/useScroll';

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
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [collectionModalOpen, setCollectionModalOpen] =
    useState<boolean>(false);
  const { moveToSection } = useScroll();
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
        commentHandler
          ? 'w-[360px] ml-[30px] overflow-hidden'
          : 'w-[90px] right-[248px] fixed overflow-hidden'
      } `}
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
          <div className="w-full mb-[32px] flex items-center flex-col ">
            {modalOpen && (
              <div className="absolute z-50">
                <ModalWrapper
                  onCloseModal={() => {
                    setModalOpen(prev => !prev);
                  }}
                  backgroundZIndex="z-[9999999]"
                  zIndex="z-[99999999]"
                  width="w-[520px]"
                  height="h-[575px]"
                  overflow="hidden"
                >
                  <div className="w-full flex flex-col z-50 relative">
                    <div className="w-full flex justify-center">
                      <Image
                        src="/portfolios/basic_profile.svg"
                        alt="유저 프로필 이미지"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="w-full flex justify-center text-neutral-100 text-[22px] mt-[20px] font-semibold">
                      닉네임
                    </div>
                    <div className="w-full">
                      <div className="flex items-center border border-stroke-10 rounded-xl p-[16px] mb-[22px]">
                        <div className="rounded-full bg-neutral-5 w-[40px] h-[40px] flex items-center justify-center mr-[15px]">
                          <Image
                            src="/portfolios/clipboard.svg"
                            width={24}
                            height={24}
                            alt="프로젝트 제안"
                            className=""
                          />
                        </div>
                        <div className="text-xl font-medium text-neutral-100">
                          프로젝트 제안하기
                        </div>
                        <button className="ml-auto w-[94px] h-[44px] bg-primary-100 text-neutral-0 rounded-xl">
                          제안하기
                        </button>
                      </div>
                      <div className="flex items-center border border-stroke-10 rounded-xl p-[16px]  mb-[22px] bg-neutral-5">
                        <div className="rounded-full bg-neutral-5 w-[40px] h-[40px] flex items-center justify-center mr-[15px]">
                          <Image
                            src="/portfolios/hire.svg"
                            width={24}
                            height={24}
                            alt="채용 제안"
                            className=""
                          />
                        </div>
                        <div className="text-xl font-medium text-neutral-30">
                          채용 제안하기
                        </div>
                      </div>{' '}
                      <div className="flex items-center border border-stroke-10 rounded-xl p-[16px]">
                        <div className="rounded-full bg-neutral-5 w-[40px] h-[40px] flex items-center justify-center mr-[15px]">
                          <Image
                            src="/portfolios/chat.svg"
                            width={24}
                            height={24}
                            alt="프로젝트 제안"
                            className=""
                          />
                        </div>
                        <div className="text-xl font-medium text-neutral-100">
                          채팅 보내기
                        </div>
                        <button className="ml-auto w-[94px] h-[44px] bg-primary-100 text-neutral-0 rounded-xl">
                          채팅하기
                        </button>
                      </div>
                    </div>
                  </div>
                </ModalWrapper>
              </div>
            )}
            {collectionModalOpen && (
              <ModalWrapper
                onCloseModal={() => {
                  setCollectionModalOpen(false);
                }}
                width="w-[600px]"
                overflow="hidden"
              >
                <PortfoliosCollection
                  setCollectionModalOpen={setCollectionModalOpen}
                />
              </ModalWrapper>
            )}
            <button className="w-[64px] hover:bg-opacity-70">
              <div className="w-[64px] rounded-full overflow-hidden relative h-[64px] flex items-center justify-center bg-neutral-0">
                <Image
                  src={userProfile}
                  alt="유저 프로필 이미지"
                  width={72}
                  height={72}
                />
              </div>
              <div className="-tracking-[.96px]  w-full flex justify-center mt-[11px] font-medium text-base">
                프로필
              </div>
            </button>
          </div>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className="w-full mb-[32px] flex items-center flex-col hover:bg-opacity-70 transition"
          >
            <div className="w-[64px] rounded-full overflow-hidden relative hover:bg-neutral-10 active:bg-neutral-20 h-[64px] flex items-center justify-center  bg-neutral-0">
              <Image
                src="/portfolios/paper.svg"
                alt="제안하기"
                width={32}
                height={32}
                className=""
              />
            </div>
            <div className="-tracking-[.96px] w-full flex justify-center mt-[11px] font-medium text-base">
              제안하기
            </div>
          </button>
          <button
            onClick={() => {
              setCollectionModalOpen(true);
            }}
            className="w-full mb-[32px] flex items-center flex-col"
          >
            <div className="w-[64px] rounded-full overflow-hidden relative  hover:bg-neutral-10 active:bg-neutral-20 h-[64px] flex items-center justify-center  bg-neutral-0">
              <Image
                src="/portfolios/folder.svg"
                alt="컬렉션"
                width={32}
                height={32}
              />
            </div>
            <div className="-tracking-[.96px] w-full flex justify-center mt-[11px] font-medium text-base">
              컬렉션
            </div>
          </button>
          <button className="w-full mb-[32px] flex items-center flex-col">
            <div className="w-[64px] rounded-full overflow-hidden relative hover:bg-neutral-10 active:bg-neutral-20 h-[64px] flex items-center justify-center  bg-neutral-0">
              <Image
                src="/portfolios/share.svg"
                alt="공유하기"
                width={32}
                height={32}
              />
            </div>
            <div className="-tracking-[.96px] w-full flex justify-center mt-[11px] font-medium text-base">
              공유하기
            </div>
          </button>
          <button className="w-full mb-[32px] flex items-center flex-col">
            <div className="w-[64px] rounded-full overflow-hidden relative hover:bg-[#FDB850] active:bg-[#F2AB41] h-[64px] flex items-center justify-center bg-[#FFBE5C]">
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
          </button>
          <button
            onClick={() => {
              setCommentHandler(prev => !prev);
              moveToSection('topScroll');
            }}
            className="w-full mb-[32px] flex items-center flex-col"
          >
            <div className="w-[64px] rounded-full overflow-hidden relative  hover:bg-primary-90 active:bg-primary-100  h-[64px] flex items-center justify-center bg-primary-80">
              <Image
                src="/portfolios/comment.svg"
                alt="코멘트"
                width={32}
                height={32}
              />
            </div>
            <div className="-tracking-[.96px] w-full flex justify-center mt-[11px] font-medium text-base">
              코멘트
            </div>
          </button>
          <div className="w-full mb-[32px] flex items-center flex-col">
            <div className="w-[64px] rounded-full overflow-hidden relative  h-[64px] flex items-center justify-center hover:bg-[#E03B59] active:bg-[#C51E3C] bg-[#FF5171]">
              <Image
                src="/portfolios/modal_like.svg"
                alt="좋아요"
                width={32}
                height={32}
              />
            </div>
            <div className="-tracking-[.96px] w-full flex justify-center mt-[11px]  font-medium text-base">
              좋아요
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ModalRightContent;
