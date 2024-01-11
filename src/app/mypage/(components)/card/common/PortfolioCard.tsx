import Image from 'next/image';
import moreBtn from '/public/images/mypage/more_vertical_icon.png';
import { MypageMyPortfolio } from '@/types/mypage';

// const PortfolioCard = (props: MypageMyPortfolio) => {
//     const { id, portfolioImage, portfolioName, isBest, isPublic } = props;
//     return (
//         <div className="h-[335px] w-[354px] border-[1px] border-neutral-10 rounded-xl overflow-x-auto">
//             <div className="h-[257px] w-full bg-neutral-10">
//                 <Image src={portfolioImage} alt="" />
//             </div>
//             <div className="">
//                 <div>
//                     <button>{isPublic ? "공개" : "비공개"}</button>
//                     <div>{portfolioName}</div>
//                 </div>
//                 <div>
//                     <Image className="h-[40px] w-[40px]" src={moreImg} alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

const PortfolioCard = () => {
  return (
    <div className="h-[335px] min-w-[354px] border-[1px] border-neutral-10 rounded-xl overflow-x-auto overflow-y-hidden">
      <div className="h-[257px] w-full bg-primary-10"></div>
      <div className="flex flex-row p-[14px] pr-0 justify-between">
        <div className="flex-col gap-[9px]">
          <button className="py-[5px] px-[8px] rounded-[6px] bg-neutral-10 text-[12px] text-neutral-60 font-semibold">
            공개
          </button>
          <div className="text-[16px]">
            취향에 따라 커피를 선택할 수 있는 커픽
          </div>
        </div>
        <button className="pt-[4px]">
          <Image className="h-[40px] w-[40px]" src={moreBtn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
