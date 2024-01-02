import Button2 from '../../button/Button2';

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
    <section className="flex flex-col justify-center items-center gap-4 w-full h-96 bg-neutral-5">
      <h2 className="text-6xl">모임찾기</h2>
      <p>나와 맞는 모임을 검색해 보세요</p>
      <div className="flex gap-[20px] text-xl">
        <div className="flex gap-[20px] mt-5">
          {GATHERING_FILTERS.map(({ selectName, options }) => (
            <select
              key={selectName}
              className="border-[1px] border-neutral-30 rounded-sm"
              name={selectName}
              id={`${selectName}-select`}
            >
              {options.map(({ value, description }) => (
                <option key={value} value={value}>
                  {description}
                </option>
              ))}
            </select>
          ))}
          <Button2 content="모임 만들기" />
        </div>
      </div>
    </section>
  );
};

export default GatheringBannerSection;
