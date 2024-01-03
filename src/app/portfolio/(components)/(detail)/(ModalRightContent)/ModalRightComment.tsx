import { PortfolioPageCategory } from '@/types/portfolio';
import { Dispatch, SetStateAction } from 'react';

const ModalRightComment = ({
  portfolioId,
  portfolioTitle,
  userId,
  userNickname,
  setCommentHandler,
  job,
}: {
  portfolioId: number;
  portfolioTitle: string;
  userId: number;
  userNickname: string;
  job: PortfolioPageCategory;
  setCommentHandler: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(portfolioTitle);
  return (
    <div className="text-neutral-100 px-[25px] py-[69px]">
      <div className="">
        <div className="text-[22px] font-semibold">{portfolioTitle}</div>
        <div className="text-neutral-60 ">{job}</div>
      </div>
    </div>
  );
};

export default ModalRightComment;
