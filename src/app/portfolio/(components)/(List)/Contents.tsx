'use client';

import { PortfolioDetail, PortolioList } from '@/types/portfolio';
import { apiRequest } from '@/utils/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PortfolioListContents = ({ category }: { category: string }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading,refetch } = useQuery({
    queryKey: ['PortfolioList'],
    queryFn: async () => {
      const response = await apiRequest<PortolioList>(
        `portfolios?category=${category}&page=${page}`,
        'GET',
      );
      return response;
    },
  });

  useEffect(() => {
    refetch();
  }, [category, page, refetch]);

  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (data && data.portfolioList) {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full grid  grid-cols-4">
          {data.portfolioList.map(e => (
            <div className={`w-64 h-96`} key={e.portfolioId}>
              <div className={`w-64 h-96 flex flex-col`}>
                {/* 썸네일 영역 */}
                <div className={`w-64 h-52 relative mb-2`}>
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
                <div className="flex mt-2">
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
                      <div className="mr-1">👁️</div>
                      <div className="mr-2">{e.hit}</div>
                    </div>
                    <div className="flex">
                      <div className="mr-1">❤️</div>
                      <div>{e.like}</div>
                    </div>
                  </div>
                </div>
              </div>
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
