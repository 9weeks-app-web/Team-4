'use client';

import { PortfolioDetail } from '@/types/portfolio';
import { apiRequest } from '@/utils/api';
import dateFormat from '@/utils/dateFormat';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import UserOtherPortfolios from './UserOtherPortfolios';
import ModalRightContent from './(ModalRightContent)';
import { Dispatch, SetStateAction } from 'react';
import useScroll from '@/hooks/useScroll';

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
  const { moveToSection } = useScroll();

  if (isFetching) {
    return <div>로딩중...</div>;
  } else if (data !== undefined) {
    return (
      <div className="w-full h-full flex ">
        <div className="w-full ">
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
            <div className="ml-[16px]">
              <div className="text-[22px] font-[600]">{data.title}</div>
              <div className="text-[16px] font-[500]">{data.nickname}</div>
            </div>
          </div>
          <div className="w-full border-t-2 border-neutral-20"></div>
          {/* 태그 영역 */}
          <div className="flex p-[12px] h-[76px] items-center sticky -top-[40px] z-10 bg-neutral-0 border-b-2 border-neutral-20">
            {data.content.bookmark.map((e, index) => (
              <button
                onClick={() => {
                  moveToSection(e);
                }}
                className="mr-2 flex px-[20px] p-3 border h-8 items-center border-neutral-10 w-fit rounded-full"
                key={index}
                // id={e}
              >
                {e}
              </button>
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
                {e.type === 'text' && (
                  <div className="w-[0px] h-[0px] invisible" id={e.content}>
                    {e.content}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col text-neutral-0 w-full items-center justify-center bg-neutral-100 h-[400px]">
            <div className="text-[26px] font-[700] pb-[12px]">{data.title}</div>
            <div className="text-[18px] font-[500] pb-[12px]">
              {data.content.description}
            </div>
            <div className="flex text-sm pb-[12px]">
              <div className="flex text-neutral-40 ">
                <Image
                  src="/portfolios/like.svg"
                  alt="좋아요"
                  width={24}
                  height={24}
                  className="ml-1 mr-2"
                />{' '}
                <div className="ml-[6px] mr-[20px]">{data.like}</div>
              </div>{' '}
              <div className="flex text-neutral-40 ml-1 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M10.5328 3.39641C11.3375 1.7012 13.6625 1.70119 14.4672 3.39641L15.8579 6.32618C16.1774 6.99935 16.7951 7.46594 17.5096 7.57388L20.6193 8.04369C22.4187 8.31553 23.1371 10.6145 21.8351 11.9341L19.5849 14.2146C19.0679 14.7386 18.832 15.4935 18.954 16.2334L19.4852 19.4535C19.7926 21.3168 17.9116 22.7376 16.3022 21.8579L13.5208 20.3376C12.8817 19.9883 12.1183 19.9883 11.4792 20.3376L8.69776 21.8579C7.08839 22.7376 5.20742 21.3168 5.51479 19.4536L6.04599 16.2334C6.16804 15.4935 5.93211 14.7386 5.41508 14.2146L3.16488 11.9341C1.86287 10.6145 2.58133 8.31553 4.38066 8.04369L7.49037 7.57388C8.20489 7.46594 8.82257 6.99935 9.14211 6.32618L10.5328 3.39641Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="ml-[6px] mr-[20px]">{data.like}</div>
              </div>{' '}
              <div className="flex text-neutral-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.5 21.125C17.4706 21.125 21.5 17.0956 21.5 12.125C21.5 7.15444 17.4706 3.125 12.5 3.125C7.52944 3.125 3.5 7.15444 3.5 12.125C3.5 13.7643 3.93827 15.3012 4.70404 16.625L3.95 20.675L8 19.921C9.32378 20.6867 10.8607 21.125 12.5 21.125Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{' '}
                <div className="ml-[6px] mr-[20px]">{data.like}</div>
              </div>{' '}
              <div className="flex text-neutral-40  ml-1 mr-2">
                <Image
                  src="/portfolios/hit.svg"
                  alt="조회수"
                  width={24}
                  height={24}
                  className="ml-2 mr-2"
                />{' '}
                <div className="">{data.hit}</div>
              </div>
            </div>
            <div className="text-neutral-50 text-[14px] font-[400] py-[12px]">
              게시: {dateFormat(data.createAt)}
            </div>
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
                className={`text-lg font-medium mb-5 p-8 w-[706px] border-neutral-10 border rounded-xl min-h-[142px] bg-neutral-0`}
              >
                <div>참여 프로그램</div>
                <div className="flex mt-[14px] mb-[14px] px-[14px] border h-8 items-center border-neutral-10 w-fit rounded-full">
                  {data.content.programs && data.content.programs}
                </div>
                <div>
                  <Image
                    src="/portfolios/banner.png"
                    width={642}
                    height={168}
                    alt="배너"
                    className="rounded-xl"
                  />
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
