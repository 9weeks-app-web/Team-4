import Link from 'next/link';
import Image from 'next/image';
import { Children } from 'react';
import { GatheringCard } from '@/types/gathering';
import ChipBasic from '../chip/ChipBasic';
import ChipPrimary from '../chip/ChipPrimary';

interface NormalGatherigCardProps {
  data?: GatheringCard;
  link: string;
}

const TYPE_MAPPER = {
  project: '프로젝트',
  study: '스터디',
};

const POSITION_MAPPER = {
  PM: '기획자',
  frontEnd: '프론트엔드',
  backEnd: '백엔드',
  designer: '디자이너',
} as { [index: string]: string };

const NormalGatherigCard = ({
  data = {
    id: 1,
    type: 'project',
    Dday: 3,
    title: '프로젝트 이름은 1줄까지 표시됩니다.',
    content: '프로젝트 내용은 2줄까지 표시됩니다.',
    subject: '프로젝트 주제',
    teamName: '팀 이름',
    tag: '태그',
    member: {
      planner: 1,
      designer: 3,
      frontEnd: 3,
    },
    deadline: new Date('2024. 01. 12'),
    profileImage: 'https://dummyimage.com/100x100/74afe3/fff',
    comments: 812,
    hits: 812,
  },
  link,
}: NormalGatherigCardProps) => {
  const {
    type,
    Dday,
    title,
    content,
    subject,
    teamName,
    member,
    capacity,
    deadline,
    profileImage,
    comments,
    hits,
  } = data;

  return (
    <Link href={link}>
      <div className="relative min-w-[380px] h-[360px] px-6 py-3 border border-stroke-10 bg-neutral-0 rounded-2xl hover:border-2 hover:border-primary-100 hover:shadow-[0_0_20px_0_rgba(123,137,163,0.12)] hover:px-[23px] hover:py-[11px]">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <ChipBasic content={TYPE_MAPPER[type as 'project' | 'study']} />
            <ChipPrimary content={`마감 D-${Dday}`} />
          </div>
          <Image
            src="/images/gathering/bookmark.svg"
            width={32}
            height={32}
            alt="bookmark"
          />
        </div>
        <p className="pt-6 text-sm text-primary-100">{subject}</p>
        <h3 className="pt-[6px] text-[22px]">{title}</h3>
        <p className="min-h-[50px] pt-6 text-sm text-neutral-70">{content}</p>
        <div className="w-full">
          <div className="pt-9 text-xs text-neutral-70">
            <span className="mr-2 text-neutral-80 font-semibold">모집인원</span>
            {Children.toArray(
              member &&
                Object.entries(member).map(([key, value], i, self) => (
                  <span>
                    {POSITION_MAPPER[key]}{' '}
                    <span className="text-primary-100">{value}</span>
                    {self.length - 1 > i && <span className="px-[6px]">·</span>}
                  </span>
                )),
            )}
            {capacity && (
              <span>
                <span className="pl-[6px] text-primary-100">{capacity[0]}</span>
                <span className="">/{capacity[1]}</span>
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
            <div className="flex text-neutral-60">
              <div className="flex mr-2">
                <Image
                  className="mr-1"
                  src="/images/gathering/chat_bubble.svg"
                  width={24}
                  height={24}
                  alt="chat bubble"
                />
                {comments}
              </div>
              <div className="flex ">
                <Image
                  className="mr-1"
                  src="/images/gathering/view.svg"
                  width={24}
                  height={24}
                  alt="view"
                />
                {hits}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NormalGatherigCard;
