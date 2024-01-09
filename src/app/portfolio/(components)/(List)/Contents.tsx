'use client';

import { PortfolioList } from '@/types/portfolio';
import { apiRequest } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ModalWrapper from '../(Modal)';
import PortfolioDetail from '../(detail)';

const PortfolioListContents = ({ category }: { category: string }) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('latest');

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contentId, setContentId] = useState<number>();
  const [modalMargin, setModalMargin] = useState<string>('m-auto');

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['PortfolioList'],
    queryFn: async () => {
      const response = await apiRequest<PortfolioList>(
        `portfolios?category=${category}&page=${page}&sort=${sort}`,
        'GET',
      );
      return response;
    },
  });

  const { data: countData, refetch: countRefetch } = useQuery({
    queryKey: ['PortfolioListCount'],
    queryFn: async () => {
      const response = await apiRequest<{ count: number }>(
        `portfolios/count?category=${category}`,
      );
      return response;
    },
  });

  const modalHandler = () => {
    setModalIsOpen(prev => !prev);
  };

  useEffect(() => {
    refetch();
    countRefetch();
  }, [category, page, refetch, countRefetch, sort]);

  useEffect(() => {
    setPage(1);
  }, [category]);

  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (data && data.portfolioList) {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full">
          {modalIsOpen && (
            <ModalWrapper
              width="w-full"
              onCloseModal={modalHandler}
              isWrapperNoPadding={true}
              m={modalMargin}
            >
              {contentId && (
                <PortfolioDetail
                  portfolioId={contentId}
                  setModalMargin={setModalMargin}
                />
              )}
            </ModalWrapper>
          )}
        </div>
        <div className="flex mb-4">
          <div>총 {countData && countData.count}건</div>
          <div className="ml-auto">
            <button
              onClick={() => {
                setSort('latest');
              }}
              className={`${
                sort !== 'latest' && `text-neutral-30`
              } font-medium text-base mr-5`}
            >
              최신순
            </button>
            <button
              onClick={() => {
                setSort('popular');
              }}
              className={`${
                sort !== 'popular' && `text-neutral-30`
              } font-medium text-base mr-5`}
            >
              인기순
            </button>
            <button
              onClick={() => {
                setSort('recomand');
              }}
              className={`${
                sort !== 'recomand' && `text-neutral-30`
              } font-medium text-base mr-2`}
            >
              추천순
            </button>
          </div>
        </div>
        <div className="w-full h-full grid gap-8 grid-cols-4">
          {data.portfolioList.map(e => (
            <div className={`w-full h-96`} key={e.portfolioId}>
              <button
                onClick={() => {
                  setContentId(e.portfolioId);
                  modalHandler();
                }}
                className={`w-full h-96 flex flex-col`}
              >
                {/* 썸네일 영역 */}
                <div className={`w-full h-52 relative mb-2`}>
                  <Image
                    src={e.thumbnail}
                    className={`rounded-lg`}
                    fill
                    alt="썸네일"
                  />
                </div>
                {/* 직군 라벨 및 제목 영역 */}
                <div className="mt-2 pl-2 pr-2 pt-1 pb-1 min-w-14 w-fit rounded-md font-semibold text-xs text-neutral-60 bg-neutral-5">
                  {e.job}
                </div>
                <div className="ml-2 mt-2 text-lg font-semibold">{e.title}</div>
                {/* 프로필, 조회수, 좋아요 영역 */}
                <div className="flex mt-2 w-full">
                  <div className="relative w-6 h-6">
                    <Image
                      src={e.profileImg}
                      alt="프로필 이미지"
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-2 text-sm ">{e.nickname}</div>
                  <div className={`ml-auto flex text-neutral-60`}>
                    <div className="flex">
                      <div className="mr-1">
                        <Image
                          src={'/portfolios/hit.svg'}
                          width={24}
                          height={24}
                          alt="조회수"
                        />
                      </div>
                      <div className="mr-2">{e.hit}</div>
                    </div>
                    <div className="flex">
                      <div className="mr-1">
                        <Image
                          src={'/portfolios/like.svg'}
                          width={24}
                          height={24}
                          alt="좋아요"
                        />
                      </div>
                      <div>{e.like}</div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center h-10">
          <div className="flex h-full items-center">
            <div className="mr-2">{`<<`}</div>
            <div className="mr-2">{`<`}</div>
          </div>
          {Array.from({ length: data.endPage }, (_, index) => (
            <button
              onClick={() => {
                setPage(prev => index + 1);
              }}
              key={index}
              className={`mr-2 w-11 flex h-11 justify-center items-center text-base font-medium ${
                index + 1 === data.page &&
                `bg-primary-10 rounded-full text-primary-80`
              }`}
            >
              {index + 1}
            </button>
          ))}
          <div className="flex h-full items-center">
            <div className="">{`>`}</div>
            <div className="ml-2">{`>>`}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>포트폴리오가 없습니다.</div>;
  }
};

export default PortfolioListContents;
