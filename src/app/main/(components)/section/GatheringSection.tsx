'use client';

import CategoryButton from "../button/CategoryButton"
import ShowMoreButton from "../button/ShowMoreButton"
import DetailGatherigCard from "../card/GatheringCard"
import ArrowLeftButton from "../button/ArrowLeftButton"
import ArrowRightButton from "../button/ArrowRightButton"
import RoundButton from "@/app/mypage/(components)/button/RoundButton"
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/utils/api';
import { GatheringCard } from '@/types/gathering';

const GatheringSection = () => {

    const { data } = useQuery({
        queryKey: ['GatheringCardList'],
        queryFn: async () => {
            const res = await apiRequest<{ cardList: GatheringCard[] }>(
                '/gathering/deadline?type=study',
            );

            return res;
        },
    });

    const limitedData = data?.cardList?.slice(0, 2);

    return (
        <div className="w-[1200px] h-[740px]">
            <div className="mx-auto">
                <div className="text-[26px] font-bold mb-[24px]">모임을 통해 함께 성장해요</div>
                <div className="flex">
                    <div className="flex space-x-2 mb-[48px]">
                        <RoundButton color="blue" content="프로젝트" />
                        <RoundButton color="gray" content="스터디" />
                    </div>
                    <div className="ml-auto text-neutral-50">
                        <ShowMoreButton content="모임 더보기" />
                    </div>
                </div>
            </div>
            <div className="flex gap-x-[30px] items-center justify-center">
                {limitedData?.map(data => (
                    <DetailGatherigCard data={data} />
                ))}
            </div>
        </div >

    );
};

export default GatheringSection;