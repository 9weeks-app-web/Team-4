import ShowMoreButton from '../button/ShowMoreButton';
import DetailPortfolioCard from '../card/DetailPortfolioCard';

const SfacPickPortfolioSection = () => {
    return (
        <div className="flex flex-row p-20">
            <div className="text-left mb-4 pl-[200px] pr-[50px]">
                <h2 className="text-xs font-bold text-primary-100">스팩 PICK</h2>
                <h2 className="text-xl font-bold">스팩폴리오의<br />우수작을 모아봤어요</h2>
                <p className="text-xs mt-2 text-neutral-50">스팩PICK은 공유의 가치가 뛰어난<br />퀄리티의 작업이 선정됩니다.</p>
                <div className='pt-10'>
                    <ShowMoreButton content='더보기' />
                </div>
            </div>

            <div className="pr-[0] flex items-center justify-between overflow-x-auto scrollbar-hide">
                <div className="flex gap-[30px]">
                    <DetailPortfolioCard />
                    <DetailPortfolioCard />
                    <DetailPortfolioCard />
                    <DetailPortfolioCard />
                </div>
            </div>
        </div>
    )
}

export default SfacPickPortfolioSection;