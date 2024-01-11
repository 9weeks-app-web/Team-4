'use client';

import { PortfolioList } from '@/types/portfolio';
import { apiRequest } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import PortfoliosList from '../(List)/List';
import { useState } from 'react';
import ModalWrapper from '../../../../components/(Modal)';
import PortfolioDetail from '../(detail)';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const PortfoliosBannerList = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['PortfolioBannerList'],
    queryFn: async () => {
      const response = await apiRequest<PortfolioList>(
        `portfolios?category=${'전체'}&page=${1}&sort=${'latest'}`,
        'GET',
      );
      return response;
    },
  });
  const [modalMargin, setModalMargin] = useState<string>('m-auto');
  const modalHandler = () => {
    setModalIsOpen(prev => !prev);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contentId, setContentId] = useState<number>();
  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (data && data.portfolioList) {
    return (
      <>
        <>
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
        </>
        <div className="flex w-full h-full">
          <Swiper
            className="w-full flex"
            spaceBetween={30}
            slidesPerView={4}
            navigation
            modules={[Navigation, Pagination]}
          >
            {data.portfolioList.map(e => (
              <SwiperSlide key={e.portfolioId} className="z-1">
                <button
                  onClick={() => {
                    setContentId(e.portfolioId);
                    modalHandler();
                  }}
                  className={`w-full h-96 flex flex-col`}
                >
                  <PortfoliosList e={e} />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default PortfoliosBannerList;
