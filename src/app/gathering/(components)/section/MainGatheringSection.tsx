import NormalGatherigCard from '../card/NormalGatheringCard';

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

const MainGatheringSection = () => {
  return (
    <section className="flex flex-col w-[60%] my-28">
      <nav>
        <ul className="flex gap-[30px] text-2xl">
          <li>
            <button>전체</button>
          </li>
          <li>
            <button>프로젝트</button>
          </li>
          <li>
            <button>스터디</button>
          </li>
          <li>
            <button>리스팩러</button>
          </li>
        </ul>
      </nav>
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
      </div>
      <div className="flex justify-between mt-14">
        <span className="">999건</span>
        <span className="flex gap-4">
          <button>최신순</button>
          <button>인기순</button>
          <button>추천순</button>
        </span>
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-x-4 gap-y-6 mt-4">
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
      </div>
      <div className="flex self-center gap-4 mt-12">
        <button>{'<'}</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
        <button>{'>'}</button>
      </div>
    </section>
  );
};

export default MainGatheringSection;
