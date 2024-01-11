'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RetrospectCard } from '@/types/gathering';
import { PortfolioCard } from '@/types/portfolio';
import ButtonBasic from '@/app/gathering/(components)/button/ButtonBasic';
import ChipSmall from '@/app/gathering/(components)/chip/ChipSmall';
import { DetailPortfolio } from '@/types/main';


const DetailPortfolioCard = (data: DetailPortfolio) => {

    return (
        <div
            className="w-[346px] min-h-[476px] flex flex-col rounded-xl overflow-hidden font-normal border bg-neutral-0 border-neutral-10">
            <Image
                className="aspect-[4/3] w-full rounded-t-xl"
                src={data.image}
                alt="thumbnail"
                width={380}
                height={285}
            />
            <div className="pt-[24px] px-[22px] flex flex-col h-[190px]">
                <div className='mb-[12px]'>
                    <ChipSmall content={data.category} />
                </div>
                <h3 className="font-semibold text-lg truncate break-all">{data.title}</h3>
                <p className="w-full text-neutral-70 text-sm line-clamp-2">
                    {data.content}
                </p>
                <div className="flex justify-between mt-auto">
                    <div className="flex">
                        <Image
                            className="mr-2 rounded-[50%]"
                            src="/images/mypage/profile_icon.png"
                            alt="profile"
                            width={24}
                            height={24}
                        />
                        <span>{data.name}</span>
                    </div>
                    <div className="flex items-center text-neutral-60 mt-auto">
                        <span className="flex mr-2">
                            <Image
                                className="mr-1"
                                src="/images/gathering/view.svg"
                                width={24}
                                height={24}
                                alt="view"
                            />
                            {data.view}
                        </span>
                        <span className="flex ">
                            <Image
                                className="mr-1"
                                src="/images/gathering/heart.svg"
                                width={24}
                                height={24}
                                alt="heart"
                            />
                            {data.like}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPortfolioCard;
