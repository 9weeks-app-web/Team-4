'use client';
import ButtonBasic from '@/app/gathering/(components)/button/ButtonBasic'
import Image from 'next/image'
import React from 'react';
import CategoryButton from "../button/CategoryButton"
import TabComponent from '@/app/mypage/(components)/button/TabButton'

const RespectRankingSection = () => {
    const data = [
        {
            id: 0,
            title: "포트폴리오 피드백",
            section: <></>

        },
        {
            id: 1,
            title: "포트폴리오 업로드",
            section: <></>
        },
        {
            id: 2,
            title: "모임 참여",
            section: <></>
        },
    ];
    return (
        <div className="bg-primary-5 w-[100%] h-[900px]">
            <div className="w-[1199px] mx-auto mt-[102px]">
                <div className="flex mb-[24px]">
                    <div className="text-[26px] font-bold mr-[8px]">리스팩 랭킹을 소개해드려요</div>
                    <Image className="my-anchor-element" src="/images/main/help.png" height={5} width={38} />

                </div>
                <div className="flex mb-[48px] items-center">
                    <TabComponent data={data} />
                    <span className="text-[18px] text-neutral-50 ml-auto">2023.12.29 (금) 기준</span>
                </div>
                <div className="flex gap-[30px] mx-auto">
                    <div className="bg-neutral-0 flex flex-col items-center rounded-[16px] border-[1px] border-primary-30 h-[528px] w-[534px] py-[38px] px-[56px] space-y-4">
                        <Image src="/images/main/profile.png" width={110} height={120} />
                        <div className='flex flex-row items-center text-[22px] font-semibold'>
                            김수진
                        </div>
                        <p className="text-center text-[16px] text-neutral-70 mb-[20px]">UX/UI 디자인</p>
                        <div className="flex w-[422px] h-[127px] bg-[#F8F8F9] border-neutral-10 rounded-[12px] justify-between items-center px-[54px] mb-[36px]">
                            <div className="text-center space-y-[13px]">
                                <p className="w-[26px] mx-auto">
                                    <Image src="/images/main/spectrum_big.png" width={26} height={32} />
                                </p>
                                <p className="text-[16px] text-neutral-60">스팩트럼</p>
                            </div>
                            <div className="text-center space-y-[12px]">
                                <p className="text-[18px]">338</p>
                                <p className="text-[16px] text-neutral-60">팔로워</p>
                            </div>
                            <div className="text-center space-y-[12px]">
                                <p className="text-[18px]">350</p>
                                <p className="text-[16px] text-neutral-60">프로젝트 수</p>
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <ButtonBasic content='포트폴리오 보기' />
                        </div>
                    </div>
                    <div className="bg-neutral-0 rounded-[16px] border-[1px] border-primary-30 h-[528px] w-[635px]">
                        <div className="flex flex-col divide-y divide-primary-5 rounded-lg bg-neutral-0 overflow-hidden ">
                            <div className="flex items-center justify-between px-6 py-4 bg-primary-10 text-primary-70 text-[16px] h-[70px]">
                                <div className="">닉네임</div>
                                <div className="flex space-x-4">
                                    <h3 className="">뱃지 수</h3>
                                    <h3 className="">피드백 수</h3>
                                </div>
                            </div>
                            <div className="flex items-center px-6 py-3 space-x-4 h-[80px] bg-primary-70 text-neutral-0">
                                <span className="flex-grow flex font-medium text-neutral-0 items-center space-x-[6px]">
                                    <Image src="/images/main/badge_1st.png" width={32} height={32} />
                                    <div>김수진</div>
                                    <Image src="/images/main/spectrum1.png" width={19} height={24} />
                                </span>
                                <span className="w-12 text-center text-neutral-0">999</span>
                                <span className="w-12 text-center text-neutral-0">999</span>
                            </div>
                            <div className="flex items-center px-6 py-3 h-[80px] space-x-4">
                                <span className="flex-grow flex font-medium text-neutral-100 items-center space-x-[6px]">
                                    <Image src="/images/main/badge_2nd.png" width={32} height={32} />
                                    <div>디자인킬러</div>
                                    <Image src="/images/main/spectrum1.png" width={19} height={24} />
                                </span>
                                <span className="w-12 text-center">999</span>
                                <span className="w-12 text-center">999</span>
                            </div>
                            <div className="flex items-center px-6 py-3 h-[80px] space-x-4">
                                <span className="flex-grow flex font-medium text-neutral-100 items-center space-x-[6px]">
                                    <Image src="/images/main/badge_3rd.png" width={32} height={32} />
                                    <div>피그마마스터</div>
                                    <Image src="/images/main/spectrum2.png" width={19} height={24} />
                                </span>
                                <span className="w-12 text-center">999</span>
                                <span className="w-12 text-center">999</span>
                            </div>
                            <div className="flex items-center px-6 py-3 h-[80px] space-x-4">
                                <span className="flex-grow flex font-medium text-neutral-100 items-center space-x-[6px]">
                                    <Image src="/images/main/badge_4th.png" width={32} height={32} />
                                    <div>고하은</div>
                                    <Image src="/images/main/spectrum3.png" width={19} height={24} />
                                </span>
                                <span className="w-12 text-center">999</span>
                                <span className="w-12 text-center">999</span>
                            </div>
                            <div className="flex items-center px-6 py-3 h-[80px] space-x-4">
                                <span className="flex-grow flex font-medium text-neutral-100 items-center space-x-[6px]">
                                    <Image src="/images/main/badge_5th.png" width={32} height={32} />
                                    <div>취준대박</div>
                                    <Image src="/images/main/spectrum4.png" width={19} height={24} />
                                </span>
                                <span className="w-12 text-center">999</span>
                                <span className="w-12 text-center">999</span>
                            </div>
                            <div className="flex items-center px-6 py-4 text-[14px] text-neutral-40 mx-auto">
                                포트폴리오 좋아요와 한 줄 피드백, 댓글 활동을 활발하게 한 5명을 선정합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RespectRankingSection
