import Image from 'next/image';
import ButtonBasic from '../../button/ButtonBasic';
import ComboBox from '../../input/ComboBox';

const GATHERING_FILTERS = [
  {
    selectName: 'skill',
    options: [
      { value: 'default', description: '기술스택' },
      { value: 'react', description: 'React' },
      { value: 'next', description: 'Next.js' },
    ],
  },
  {
    selectName: 'project',
    options: [
      { value: 'default', description: '프로젝트' },
      { value: 'react', description: 'React' },
      { value: 'next', description: 'Next.js' },
    ],
  },
  {
    selectName: 'study',
    options: [
      { value: 'default', description: '스터디' },
      { value: 'react', description: 'React' },
      { value: 'next', description: 'Next.js' },
    ],
  },
  {
    selectName: 'repecter',
    options: [
      { value: 'default', description: '리스팩러' },
      { value: 'react', description: 'React' },
      { value: 'next', description: 'Next.js' },
    ],
  },
];

const GatheringBannerSection = () => {
  return (
    <section className="relative gap-4 w-full h-[539px] bg-[url(/images/gathering/main_banner.png)] bg-no-repeat">
      <h2 className="mt-[304px] w-[500px] ml-[calc((100%-1200px)/2)] text-[42px]  text-neutral-0 font-semibold break-keep">
        나와 맞는 모임을 찾아 커리어 스펙트럼을 넓혀보세요!
      </h2>
      <div className="absolute bottom-[-78.5px] min-w-[1200px] h-[157px] ml-[calc((100%-1200px)/2)] px-[53px] py-[48px] bg-neutral-0 rounded-2xl shadow-xl">
        <div className="flex gap-3 h-full text-lg text-neutral-40 font-medium">
          <div className="flex flex-[3] px-5 py-[18px] border border-neutral-10 rounded-xl">
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
          {GATHERING_FILTERS.map(({ selectName, options }) => (
            <div key={selectName} className="flex-[1]">
              <ComboBox>
                <ComboBox.Select selectName={selectName} options={options} />
              </ComboBox>
            </div>
          ))}
          <ButtonBasic content="모임 찾기" />
        </div>
      </div>
    </section>
  );
};

export default GatheringBannerSection;
