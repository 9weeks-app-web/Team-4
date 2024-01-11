import Image from 'next/image';
import { RespectCard } from '@/types/gathering';
import ChipSmall from '@/app/gathering/(components)/chip/ChipSmall';
import { Children } from 'react';
import Link from 'next/link';

const HotCreatorCard = () => {
    return (
        <div className="relative w-[380px] h-[340px] px-8 py-8 border border-stroke-10 bg-neutral-0 rounded-2xl hover:shadow-[0_10px_10px_0_rgba(0,89,255,0.05)] hover:border-2 hover:border-primary-100 hover:px-[31px] hover:py-[31px]">
            <div className="flex gap-5">
                <Image
                    src="/images/main/profile_plus.png"
                    width={72}
                    height={72}
                    alt="profile"
                />
                <div className="flex flex-col justify-evenly">
                    <span className="text-lg font-semibold">김수진</span>
                    <div className="flex gap-[6px] mt-1 text-sm">
                        <span className="text-neutral-40">팔로워</span>
                        <span>999</span>
                        <span className="text-neutral-40">·</span>
                        <span className="text-neutral-40">팔로잉</span>
                        <span>999</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 mt-10">
                <span className="text-neutral-40">본캐</span>
                <span>편집 디자인</span>
                <span>
                    <ChipSmall content="고수" theme="warning" />
                </span>
            </div>
            <div className="flex gap-3 mt-3">
                <span className="text-neutral-40">본캐</span>
                <span>웹 디자인</span>
                <span>
                    <ChipSmall content="고수" theme="warning" />
                </span>
            </div>
            <div className="flex gap-1 mt-8 max-h-[77px]">
                <Image
                    className="rounded-md"
                    src="/images/main/portfolio/photo12.png"
                    width={102}
                    height={77}
                    alt="profile"
                />
                <Image
                    className="rounded-md"
                    src="/images/main/portfolio/photo10.png"
                    width={102}
                    height={77}
                    alt="profile"
                />
                <Image
                    className="rounded-md"
                    src="/images/main/portfolio/photo9.png"
                    width={102}
                    height={77}
                    alt="profile"
                />
            </div>
        </div>
    );
};

export default HotCreatorCard;
