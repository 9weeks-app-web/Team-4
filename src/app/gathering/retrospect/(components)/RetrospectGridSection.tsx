import RetrospectCard from '../../(components)/card/ThumbnailGatheringCard';
import ComboBox from '../../(components)/input/ComboBox';

const RetrospectGridSection = () => {
  return (
    <section className="flex flex-col w-[1200px] my-28">
      <h3 className="text-[26px] font-bold">
        완성된 프로젝트 회고를 만나보세요
      </h3>
      <div className="flex w-full max-w-[296px] gap-4 mt-5">
        <ComboBox>
          <ComboBox.Select
            selectName="jobs"
            options={[
              { value: 'default', description: '직군' },
              { value: 'desinger', description: '디자이너' },
              { value: 'developer', description: '개발자' },
            ]}
          />
        </ComboBox>
        <ComboBox>
          <ComboBox.Select
            selectName="position"
            options={[
              { value: 'default', description: '포지션' },
              { value: 'desinger', description: '디자이너' },
              { value: 'frontEnd', description: '프론트엔드' },
              { value: 'backEnd', description: '백엔드' },
            ]}
          />
        </ComboBox>
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
