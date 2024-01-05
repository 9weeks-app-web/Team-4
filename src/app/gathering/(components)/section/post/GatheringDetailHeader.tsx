import ButtonRound from '../../button/ButtonRound';

interface GatheringDetailHeaderProps {
  title: string;
  type: string;
}

const GatheringDetailHeader = ({ title, type }: GatheringDetailHeaderProps) => {
  return (
    <>
      <button className="text-3xl mb-[50px]">＜</button>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{type}</p>
        </div>
        <div className="">
          <ButtonRound content="모집 신청하기" theme="neutral" />
        </div>
      </div>
    </>
  );
};

export default GatheringDetailHeader;
