import NormalGatherigCard from '../../card/NormalGatheringCard';
import ButtonRound from '../../button/ButtonRound';

const RecommendGatheringSection = () => {
  return (
    <section className="flex flex-col w-full px-[20%] bg-neutral-5 my-[100px] py-[50px]">
      <p className="text-neutral-30">신규 모임</p>
      <h3 className="w-56 py-4 text-2xl break-keep">
        많은 스펙인이 저장한 신규 모임들이에요
      </h3>
      <div className="flex gap-4 w-full mt-4">
        <NormalGatherigCard />
        <NormalGatherigCard />
        <NormalGatherigCard />
      </div>
      <div className="flex flex-col justify-center items-center  gap-1 w-full py-[30px] mt-[50px] bg-neutral-20">
        <p className=" text-2xl">
          로그인 시 관심사에 맞는 프로젝트/ 스터디를 알려드려요
        </p>
        <p>로그인하면 여러분의 관심사에 맞는 프로젝트, 스터디를 추천해드려요</p>
        <ButtonRound content="모임 만들기" />
      </div>
    </section>
  );
};

export default RecommendGatheringSection;
