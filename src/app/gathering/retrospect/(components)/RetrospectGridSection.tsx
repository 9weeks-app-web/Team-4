import RetrospectCard from '../../(components)/card/RetrospectCard';

const RETROSPECT_FILTERS = [
  {
    selectName: 'job',
    options: [
      { value: 'default', description: '직군' },
      { value: 'react', description: 'React' },
      { value: 'next', description: 'Next.js' },
    ],
  },
  {
    selectName: 'position',
    options: [
      { value: 'default', description: '포지션' },
      { value: 'react', description: 'React' },
      { value: 'next', description: 'Next.js' },
    ],
  },
];

const RetrospectGridSection = () => {
  return (
    <section className="flex flex-col w-[60%] my-28">
      <h3 className="text-2xl font-semibold">
        완성된 프로젝트 회고를 만나보세요
      </h3>
      <div className="flex gap-[20px] mt-5">
        {RETROSPECT_FILTERS.map(({ selectName, options }) => (
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
        <span className="">총 999건</span>
        <span className="flex gap-4">
          <button>최신순</button>
          <button>인기순</button>
          <button>추천순</button>
        </span>
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-x-4 gap-y-6 mt-4">
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
        <RetrospectCard />
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

export default RetrospectGridSection;
