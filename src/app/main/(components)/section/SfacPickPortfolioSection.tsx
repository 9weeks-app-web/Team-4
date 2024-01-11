'use client';
import ShowMoreButton from '../button/ShowMoreButton';
import DetailPortfolioCard from '../card/DetailPortfolioCard';
import ThumbnailGatheringCard from '@/app/gathering/(components)/card/ThumbnailGatheringCard';
import { apiRequest } from '@/utils/api';
import { DetailPortfolio } from '@/types/main';
import { useQuery } from '@tanstack/react-query';

const SfacPickPortfolioSection = () => {
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
        <div className="flex max-w-[1920px] pt-[87px]">
            <div className="text-left mb-4 pl-[360px] pr-[88px]">
                <div className="text-[16px] font-bold text-primary-100 mb-[16px]">스팩 PICK</div>
                <div className="text-[26px] font-bold mb-[32px]">스팩폴리오의<br />우수작을 모아봤어요</div>
                <p className="text-[18px] text-neutral-60 mb-[104px] w-[242px]">스팩PICK은 공유의 가치가 뛰어난<br />퀄리티의 작업이 선정됩니다.</p>
                <ShowMoreButton content='더보기' />
            </div>
            <div className="pr-[0] flex items-center justify-between overflow-x-auto scrollbar-hide">
                <div className="flex gap-[30px]">
                    {data?.cardList?.map((cardItem: DetailPortfolio) => (
                        <DetailPortfolioCard key={cardItem.id} {...cardItem} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SfacPickPortfolioSection;