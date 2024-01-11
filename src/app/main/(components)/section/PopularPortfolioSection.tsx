'use client';
import RoundButton from "@/app/mypage/(components)/button/RoundButton";
import ShowMoreButton from "../button/ShowMoreButton";
import SimplePortfolioCard from "../card/SimplePortfolioCard";
import { apiRequest } from '@/utils/api';
import { DetailPortfolio } from '@/types/main';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const PopularPortfolioSection = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['PortfolioList'],
        queryFn: async () => {
            const res = await apiRequest<{}>(
                '/main/portfolio',
                'GET',
            );
            return res;
        },
    });

    return (
        <div className="w-[1200px] mt-[131px]">
            <div className="mx-auto">
                <div className="text-[26px] font-bold mb-[24px]">인기있는 포트폴리오를 만나보세요</div>
                <div className="flex mb-[50px]">
                    <div className="flex space-x-2">
                        <RoundButton color="blue" content="전체" />
                        <RoundButton color="gray" content="UXUI 디자인" />
                        <RoundButton color="gray" content="서비스 기획" />
                        <RoundButton color="gray" content="편집 디자인" />
                        <RoundButton color="gray" content="웹 디자인" />
                    </div>
                    <div className="ml-auto text-neutral-50">
                        <ShowMoreButton content="더보기" />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <Swiper
                    className="w-full"
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    modules={[Navigation]}
                >
                    {data?.cardList?.map((cardItem: DetailPortfolio) => (
                        <SwiperSlide>
                            <SimplePortfolioCard key={cardItem.id} {...cardItem} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
export default PopularPortfolioSection;