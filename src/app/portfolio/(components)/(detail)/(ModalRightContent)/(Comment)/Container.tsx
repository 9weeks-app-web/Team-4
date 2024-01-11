import { PortfolioPageCategory } from '@/types/portfolio';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import CommentInput from './Input';
import RightContentComment from './Content';
import RightContentReComment from './Re';

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
  return (
    <div className="text-neutral-100 w-full px-[25px] py-[69px]">
      <div className="w-full">
        <div className="flex w-full h-[40px] items-center">
          <div className="text-[22px] font-semibold">{portfolioTitle}</div>
          <div className="ml-auto">
            <button
              onClick={() => {
                setCommentHandler(prev => !prev);
              }}
            >
              <Image
                src="/portfolios/cross.svg"
                alt="닫기"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
        <div className="text-neutral-60 ">{job}</div>
        <div className="flex">
          <button className="w-[56px] mr-[12px] mt-[29px] flex items-center flex-col">
            <div className="w-[56px] hover:bg-[#E03B59] active:bg-[#C51E3C] mr-auto rounded-full overflow-hidden relative  h-[56px] flex items-center justify-center bg-[#FF5171]">
              <Image
                src="/portfolios/modal_like.svg"
                alt="좋아요"
                width={32}
                height={32}
              />
            </div>
          </button>
          <button className="w-[56px] mt-[29px] flex items-center flex-col">
            <div className="w-[56px]  hover:bg-neutral-10 active:bg-neutral-20 mr-auto rounded-full overflow-hidden relative border border-neutral-10  h-[56px] flex items-center justify-center bg-neutral-0">
              <Image
                src="/portfolios/folder.svg"
                alt="컬렉션"
                width={32}
                height={32}
              />
            </div>
          </button>
        </div>
        <div>
          <CommentInput
            profileImg={profileImg}
            userId={userId}
            userNickname={userNickname}
          />
        </div>
        <div>
          <div className="border-b border-stroke-10">
            <RightContentComment
              bookmarks={['데스크 리서치', '유저 리서치']}
              content="일러스트랑 그래픽들은 무슨 툴 쓰신걸까요..?"
              createAt={new Date('2024-01-04')}
              job="UI/UX"
              nickname="닉네임"
              profile={profileImg}
              userId={0}
            />
          </div>
          <div className="border-b border-stroke-10">
            <RightContentComment
              content="어디서 살 수 있나요?"
              createAt={new Date('2024-01-04')}
              job="UI/UX"
              nickname="닉네임"
              profile={profileImg}
              userId={0}
            />
          </div>
          <div className="border-b border-stroke-10 w-full">
            <RightContentComment
              content="어떤 명조체인지 알 수 있을까요?!"
              createAt={new Date('2024-01-04')}
              job="UI/UX"
              nickname="닉네임"
              profile={profileImg}
              userId={0}
            />
          </div>
          <div className="border-b border-stroke-10 w-full">
            <RightContentReComment
              content="산돌 네오 명조입니당~~"
              createAt={new Date('2024-01-04')}
              job="UI/UX"
              nickname="닉네임"
              profile={profileImg}
              userId={0}
            />
          </div>
          <div className="border-b border-stroke-10">
            <RightContentComment
              content="이 부분에서 퍼소나를 두명으로 설정한 이유가 있나요?"
              createAt={new Date('2024-01-04')}
              job="UI/UX"
              nickname="닉네임"
              profile={profileImg}
              userId={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRightComment;
