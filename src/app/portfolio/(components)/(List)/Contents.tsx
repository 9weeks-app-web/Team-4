'use client';

import { PortfolioList } from '@/types/portfolio';
import { apiRequest } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ModalWrapper from '../../../../components/(Modal)';
import PortfolioDetail from '../(detail)';
import PortfoliosList from './List';

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
                <PortfoliosList e={e} />
              </button>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center h-10">
          <div className="flex h-full items-center">
            <div className="mr-2 text-[16px] text-neutral-50">{`<<`}</div>
            <div className="mr-2 text-[16px] text-neutral-50">{`<`}</div>
          </div>
          {Array.from({ length: data.endPage }, (_, index) => (
            <button
              onClick={() => {
                setPage(prev => index + 1);
              }}
              key={index}
              className={`mr-2 w-11 flex h-11 justify-center items-center text-[16px]font-medium  ${
                index + 1 === data.page
                  ? `bg-primary-100 rounded-full text-neutral-0`
                  : ' text-neutral-50'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <div className="flex h-full items-center">
            <div className="ml-2 text-[16px] text-neutral-50">{`>`}</div>
            <div className="ml-2 text-[16px] text-neutral-50">{`>>`}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>포트폴리오가 없습니다.</div>;
  }
};

export default PortfolioListContents;
