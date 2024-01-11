'use client';
import { PortfolioList } from '@/types/portfolio';
import { apiRequest } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const UserOtherPortfolios = ({
  userId,
  portfolioId,
}: {
  userId: number;
  portfolioId: number;
}) => {
  // 해당 유저가 작성한 다른 포트폴리오 리스트
  const { data, isFetching } = useQuery({
    queryKey: ['otherPortfolios', userId, 'portfolioId', portfolioId],
    queryFn: async () => {
      const response = await apiRequest<
        Omit<PortfolioList, 'page' | 'endPage'>
      >(`portfolios/users?userId=${userId}&portfolioId=${portfolioId}`);

      return response;
    },
  });
  if (isFetching) {
    return <div>불러오는 중...</div>;
  } else if (data && data.portfolioList) {
    return (
      <div className="w-full h-full flex">
        <Swiper
          className="w-full flex"
          spaceBetween={30}
          slidesPerView={3}
          navigation
          modules={[Navigation, Pagination]}
        >
          {data.portfolioList.map(e => (
            <SwiperSlide key={e.portfolioId} className="relative">
              <div className="min-w-[30%]  w-full h-[340px] flex flex-col items-center z-1">
                <div className="max-w-[337px] w-full h-[252px]">
                  <Image
                    src={e.thumbnail}
                    className="rounded-xl"
                    alt="포트폴리오 썸네일"
                    width={338}
                    height={252}
                  />
                </div>
                <div className="mt-auto max-w-[337px] p-1 w-full text-neutral-0 z-1">
                  <div className="font-semibold text-lg mb-2 z-1">
                    {e.title}
                  </div>
                  <div className="flex font-normal text-sm">
                    <div className="flex h-6">
                      <Image
                        src={e.profileImg}
                        alt="프로필이미지"
                        width={24}
                        height={24}
                        className="rounded-xl mr-2"
                      />
                      <div className="mr-auto">{e.nickname}</div>
                    </div>
                    <div className="ml-auto mr-2 flex">
                      {' '}
                      <Image
                        src="/portfolios/hit.svg"
                        alt="조회수"
                        width={24}
                        height={24}
                        className="ml-2 mr-2"
                      />{' '}
                      {e.hit}
                    </div>
                    <div className="flex">
                      {' '}
                      <Image
                        src="/portfolios/like.svg"
                        alt="좋아요"
                        width={24}
                        height={24}
                        className="ml-1 mr-2"
                      />{' '}
                      {e.like}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  } else {
    return null;
  }
};

export default UserOtherPortfolios;
