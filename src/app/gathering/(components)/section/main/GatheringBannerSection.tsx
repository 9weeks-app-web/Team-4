'use client';

import Image from 'next/image';
import ButtonBasic from '../../button/ButtonBasic';
import ComboBox from '../../input/ComboBox';
import { Children } from 'react';

const GATHERING_FILTERS = [
  {
    selectName: 'imsi',
    options: ['모임종류', '모든 모임', '프로젝트', '스터디'],
  },
  {
    selectName: 'imsi',
    options: ['직군', '기획', '개발', '디자인'],
  },
  {
    selectName: 'imsi',
    options: [
      '포지션',
      'PM',
      '서비스 기획',
      '프론트엔드',
      '백엔드',
      '디자이너',
    ],
  },
];

const GatheringBannerSection = () => {
  return (
    <section className="relative gap-4 w-full h-[539px] bg-[url(/images/gathering/banner.svg)] bg-no-repeat bg-center">
      <h2 className="mt-[304px] ml-[calc((100%-1200px)/2)] text-[42px]  text-neutral-0 font-semibold">
        나와 맞는 모임을 찾아
      </h2>
      <h2 className="ml-[calc((100%-1200px)/2)] text-[42px]  text-neutral-0 font-semibold">
        커리어 스펙트럼을 넓혀보세요!
      </h2>
      <div className="absolute bottom-[-78.5px] min-w-[1200px] h-[157px] ml-[calc((100%-1200px)/2)] px-[53px] py-[48px] bg-neutral-0 rounded-2xl shadow-xl">
        <div className="flex gap-3 h-full text-lg text-neutral-40 font-medium">
          <div className="flex flex-[2] px-5 py-[18px] border border-neutral-10 rounded-xl">
            <Image
              src="images/gathering/search.svg"
              width={24}
              height={24}
              alt="search"
            />
            <input
              className="ml-3 w-full"
              placeholder="관심 키워드를 입력해 보세요!"
            />
          </div>
          {Children.toArray(
            GATHERING_FILTERS.map(({ selectName, options }) => (
              <div className="flex-[1]">
                <ComboBox>
                  <ComboBox.Select selectName={selectName} options={options} />
                </ComboBox>
              </div>
            )),
          )}
          <ButtonBasic content="모임 찾기" />
        </div>
      </div>
    </section>
  );
};

export default GatheringBannerSection;
