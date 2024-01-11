import Image from 'next/image';
import { GatheringCard } from '@/types/gathering';
import ChipBasic from '@/app/gathering/(components)/chip/ChipBasic';
import ChipPrimary from '@/app/gathering/(components)/chip/ChipPrimary';
import Link from 'next/link';

interface LargeGatherigCardProps {
    data: GatheringCard;
    link?: string;
}

const TYPE_MAPPER = {
    project: '프로젝트',
    study: '스터디',
};

const DetailGatherigCard = ({
    data,
    link = '/gathering/project/12',
}: LargeGatherigCardProps) => {
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
        <Link href={link}>
            <div className="relative min-w-[585px] h-[360px] px-6 py-3 border border-stroke-10 rounded-2xl hover:border-2 hover:border-primary-100 hover:shadow-[0_0_20px_0_rgba(123,137,163,0.12)] hover:px-[23px] hover:py-[11px]">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <ChipBasic content={TYPE_MAPPER[type as 'project' | 'study']} />
                        <ChipPrimary content={`마감 D-${Dday}`} />
                    </div>
                    <Image
                        src="images/gathering/bookmark.svg"
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
                        {member?.planner && (
                            <span>
                                기획자{' '}
                                <span className="text-primary-100">{member.planner}</span>
                            </span>
                        )}
                        {member?.PM && (
                            <span>
                                <span className="px-[6px]">·</span>
                                PM <strong className="text-primary-100">{member.PM}</strong>
                            </span>
                        )}
                        {member?.designer && (
                            <span>
                                <span className="px-[6px]">·</span>
                                디자이너{' '}
                                <span className="text-primary-100">{member.designer}</span>
                            </span>
                        )}
                        {member?.frontEnd && (
                            <span>
                                <span className="px-[6px]">·</span>
                                프론트엔드{' '}
                                <span className="text-primary-100">{member.frontEnd}</span>
                            </span>
                        )}
                        {member?.backEnd && (
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
                        <div className="flex text-neutral-60">
                            <div className="flex mr-2">
                                <Image
                                    className="mr-1"
                                    src="images/gathering/chat_bubble.svg"
                                    width={24}
                                    height={24}
                                    alt="chat bubble"
                                />
                                {comments}
                            </div>
                            <div className="flex ">
                                <Image
                                    className="mr-1"
                                    src="images/gathering/view.svg"
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

export default DetailGatherigCard;
