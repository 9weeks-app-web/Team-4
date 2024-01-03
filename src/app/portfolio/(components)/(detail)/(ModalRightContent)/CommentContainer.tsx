import { PortfolioPageCategory } from '@/types/portfolio';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import CommentInput from './CommentInput';

const ModalRightComment = ({
  portfolioId,
  portfolioTitle,
  profileImg,
  userId,
  userNickname,
  setCommentHandler,

  job,
}: {
  profileImg: string;
  portfolioId: number;
  portfolioTitle: string;
  userId: number;
  userNickname: string;
  job: PortfolioPageCategory;
  setCommentHandler: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(portfolioTitle);
  return (
    <div className="text-neutral-100 w-full px-[25px] py-[69px]">
      <div className="">
        <div className="text-[22px] font-semibold">{portfolioTitle}</div>
        <div className="text-neutral-60 ">{job}</div>
        <div className="flex">
          <div className="w-[56px] mr-[12px] mt-[29px] flex items-center flex-col">
            <div className="w-[56px]  mr-auto rounded-full overflow-hidden relative  h-[56px] flex items-center justify-center bg-[#FF5171]">
              <Image
                src="/portfolios/modal_like.svg"
                alt="좋아요"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="w-[56px] mt-[29px] flex items-center flex-col">
            <div className="w-[56px]  mr-auto rounded-full overflow-hidden relative border border-neutral-10  h-[56px] flex items-center justify-center bg-neutral-0">
              <Image
                src="/portfolios/folder.svg"
                alt="컬렉션"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
        <div>
          <CommentInput
            profileImg={profileImg}
            userId={userId}
            userNickname={userNickname}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalRightComment;
