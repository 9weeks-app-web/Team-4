import { GatheringCard } from '@/types/gathering';
import ChipBasic from '../chip/ChipBasic';
import ChipPrimary from '../chip/ChipPrimary';
import Image from 'next/image';
import Link from 'next/link';

interface LargeGatherigCardProps {
  data: GatheringCard;
}

const LargeGatherigCard = ({ data }: LargeGatherigCardProps) => {
  const {
    id,
    type,
    Dday,
    title,
    content,
    subject,
    teamName,
    tag,
    member,
    deadline,
    profileImage,
    comments,
    hits,
  } = data;

  return (
    <div className="relative min-w-[585px] h-[360px] px-6 py-3 mr-[300px] border border-stroke-10 rounded-2xl">
      <Link href={`/gathering/${type}/${id}`}>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <ChipBasic content={type} />
            <ChipPrimary content={`마감 D-${Dday}`} />
          </div>
          <div>북마크 버튼</div>
        </div>
        <p className="pt-6 text-sm text-primary-100">{subject}</p>
        <h3 className="pt-[6px] text-[22px]">{title}</h3>
        <p className="pt-6 text-sm text-neutral-70">{content}</p>
        <div className="absolute bottom-3 w-full pr-12">
          <div className="pt-9 text-xs text-neutral-70">
            <span className="mr-2 text-neutral-80 font-semibold">모집인원</span>
            {member.planner && (
              <span>
                기획자{' '}
                <span className="text-primary-100">{member.planner}</span>
              </span>
            )}
            {member.PM && (
              <span>
                <span className="px-[6px]">·</span>
                PM <strong className="text-primary-100">{member.PM}</strong>
              </span>
            )}
            {member.designer && (
              <span>
                <span className="px-[6px]">·</span>
                디자이너{' '}
                <span className="text-primary-100">{member.designer}</span>
              </span>
            )}
            {member.frontEnd && (
              <span>
                <span className="px-[6px]">·</span>
                프론트엔드{' '}
                <span className="text-primary-100">{member.frontEnd}</span>
              </span>
            )}
            {member.backEnd && (
              <span>
                <span className="px-[6px]">·</span>
                백엔드{' '}
                <span className="text-primary-100">{member.backEnd}</span>
              </span>
            )}
          </div>
          <div className="pt-3 text-xs">
            <span className="mr-2 font-semibold text-neutral-80">마감일</span>
            <span className="text-neutral-70">
              {String(deadline).split('T')[0]}
            </span>
          </div>
          <div className="flex justify-between mt-6 pt-5 border-t border-stroke-10 text-base">
            <div className="flex gap-3">
              <Image
                className="rounded-[50%]"
                src={profileImage}
                alt="profile image"
                width={24}
                height={24}
              />
              <span>{teamName}</span>
            </div>
            <div className="text-neutral-60">
              <span className="mr-[2.75px]">댓글 {comments}</span>
              <span>조회수 {hits}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LargeGatherigCard;
