'use client';

import { PortfolioDetail } from '@/types/portfolio';
import { apiRequest } from '@/utils/api';
import dateFormat from '@/utils/dateFormat';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import UserOtherPortfolios from './UserOtherPortfolios';
import ModalRightContent from './(ModalRightContent)';
import { Dispatch, SetStateAction } from 'react';

const PortfolioDetail = ({
  portfolioId,
  setModalMargin,
}: {
  portfolioId: number;
  setModalMargin: Dispatch<SetStateAction<string>>;
}) => {
  // 포트폴리오 데이터
  const { data, isFetching } = useQuery({
    queryKey: ['portfolioDetail', portfolioId],
    queryFn: async () => {
      const response = await apiRequest<PortfolioDetail>(
        `portfolios/detail?portfolioId=${portfolioId}`,
      );
      return response;
    },
  });

  if (isFetching) {
    return <div>로딩중...</div>;
  } else if (data !== undefined) {
    return (
      <div className="w-full h-full flex">
        <div className="w-full">
          {/* 헤더 영역 */}
          <div className="flex p-6">
            <div className="w-16 h-16 relative">
              <Image
                src={data.profileImg}
                className="rounded-full"
                alt="프로필 이미지"
                fill
              />
            </div>
            <div className="">
              <div>{data.title}</div>
              <div>{data.nickname}</div>
            </div>
          </div>
          <div className="w-full border-t-2 border-neutral-20"></div>
          {/* 태그 영역 */}
          <div className="flex p-[12px] h-[76px] items-center">
            {data.content.bookmark.map((e, index) => (
              <div
                className="mr-2 flex px-[20px] p-3 border h-8 items-center border-neutral-10 w-fit rounded-full"
                key={index}
              >
                {e}
              </div>
            ))}
          </div>
          {/* 컨텐츠 영역 */}
          <div className="flex flex-col items-center">
            {data.portfolio.map((e, id) => (
              <div className="" key={id}>
                {e.type === 'image' && (
                  <img
                    src={e.content}
                    alt="포트폴리오 이미지"
                    className="w-full h-auto"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col text-neutral-0 w-full items-center justify-center bg-neutral-100 h-[400px]">
            <div>{data.title}</div>
            <div>{data.content.description}</div>
            <div className="flex">
              <div className="flex">
                <Image
                  src="/portfolios/like.svg"
                  alt="좋아요"
                  width={24}
                  height={24}
                  className="ml-1 mr-2"
                />{' '}
                {data.like}
              </div>{' '}
              <div className="flex">
                <Image
                  src="/portfolios/hit.svg"
                  alt="조회수"
                  width={24}
                  height={24}
                  className="ml-2 mr-2"
                />{' '}
                {data.hit}
              </div>
            </div>
            <div>게시: {dateFormat(data.createAt)}</div>
          </div>
          {/* 해당 유저의 다른 포트폴리오 영역 */}
          <div className="w-full h-[671px] bg-neutral-90">
            <div className="flex h-[72px] p-8 mb-14">
              <div className="w-[72px] h-[72px] relative">
                <Image
                  src={data.profileImg}
                  alt="프로필 이미지"
                  className="rounded-full"
                  fill
                />
              </div>
              <div className="flex h-[72px] items-center ml-6 text-base font-bold text-neutral-0">
                {data.nickname}{' '}
                {data.content.collaborators &&
                  data.content.collaborators.length > 0 && (
                    <div>
                      <Image
                        src="/portfolios/arrow_down.svg"
                        alt="화살표"
                        width={24}
                        height={24}
                        className="ml-1"
                      />
                    </div>
                  )}
                {'  '} 모든 작업 목록
              </div>
            </div>
            <div className="p-5 flex flex-col">
              <UserOtherPortfolios
                userId={data.userId}
                portfolioId={data.portfolioId}
              />
            </div>
          </div>
          {/* 하단 푸터 영역 */}
          <div className="w-full h-[949px] bg-background-5 flex px-[63px] pt-[51px]">
            <div className={`flex flex-col mr-[30px]`}>
              <div
                className={`text-lg font-medium mb-5 p-8 w-[706px] border-neutral-10 border rounded-xl h-[142px] bg-neutral-0`}
              >
                <div>분야</div>
                <div className="flex mt-[14px] px-[14px] border h-8 items-center border-neutral-10 w-fit rounded-full">
                  {data.job}
                </div>
              </div>
              <div
                className={`text-lg font-medium mb-5 p-8 w-[706px] border-neutral-10 border rounded-xl h-[142px] bg-neutral-0`}
              >
                <div>관련태그</div>
                <div className="flex mt-[14px]">
                  {data.content.tags &&
                    data.content.tags.map((e, index) => (
                      <div
                        className="mr-4 flex mt-[14px] px-[14px] border h-8 items-center border-neutral-10 w-fit rounded-full"
                        key={index}
                      >
                        {e}
                      </div>
                    ))}
                </div>
              </div>
              <div
                className={`text-lg font-medium mb-5 p-8 w-[706px] border-neutral-10 border rounded-xl h-[142px] bg-neutral-0`}
              >
                <div>참여 프로그램</div>
                <div className="flex mt-[14px] px-[14px] border h-8 items-center border-neutral-10 w-fit rounded-full">
                  {data.content.programs && data.content.programs}
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div
                className={`flex flex-col text-lg font-medium mb-5 p-8 w-[338px] h-[466px] border-neutral-10 border rounded-xl bg-neutral-0`}
              >
                <div>한 줄 피드백에 참여해 주세요.</div>
                <div className="text-sm">
                  <button className="flex mt-[24px] px-[24px] border h-12 items-center border-neutral-10 w-fit rounded-full">
                    📋 기획이 탄탄해요
                  </button>
                  <button className="flex mt-[12px] px-[24px] border h-12 items-center border-neutral-10 w-fit rounded-full">
                    ⭐ 비주얼이 멋져요
                  </button>
                  <button className="flex mt-[12px] px-[24px] border h-12 items-center border-neutral-10 w-fit rounded-full">
                    👍 완성도가 높아요
                  </button>
                  <button className="flex mt-[12px] px-[24px] border h-12 items-center border-neutral-10 w-fit rounded-full">
                    💡 이해가 잘 돼요
                  </button>
                  <button className="flex mt-[12px] px-[24px] border h-12 items-center border-neutral-10 w-fit rounded-full">
                    🔥 흐름이 자연스러워요
                  </button>
                </div>
                <button className="mt-auto mr-auto font-bold text-neutral-40">
                  코멘트 보러가기
                </button>
              </div>
              <div
                className={`flex flex-col text-lg font-medium mb-5 px-8 w-[338px] h-fit py-[30px] border-neutral-10 border rounded-xl bg-neutral-0`}
              >
                <div>Tool</div>
                <div className="text-sm">
                  {data.content.tools.map((e, index) => (
                    <div
                      key={index}
                      className="flex mt-[24px] px-[24px] border h-12 items-center border-neutral-10 w-fit rounded-full"
                    >
                      <div className="w-[24px] relative h-[24px] flex items-center overflow-hidden rounded-full border border-neutral-10 mr-2">
                        <Image src="/next.svg" alt="이미지" fill />
                      </div>
                      <div>{e}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ModalRightContent
            setModalMargin={setModalMargin}
            portfolioId={data.portfolioId}
            portfolioTitle={data.title}
            userId={data.userId}
            userNickname={data.nickname}
            userProfile={data.profileImg}
            job={data.job}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default PortfolioDetail;
