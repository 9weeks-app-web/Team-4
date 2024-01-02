import Button2 from '../../../(components)/button/Button2';

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
          <Button2 content="모집 신청하기" />
        </div>
      </div>
    </>
  );
};

export default GatheringDetailHeader;
