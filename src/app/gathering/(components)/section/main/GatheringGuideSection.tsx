import Image from 'next/image';
import ButtonRound from '../../button/ButtonRound';

const GatheringGuideSection = () => {
  return (
    <section className="flex flex-col items-center min-w-[1200px] my-[180px]">
      <p className="pb-4 text-[26px] text-primary-100 font-bold">
        나와 딱맞는 모임들, 놓치고 있나요?
      </p>
      <p className="pb-20 text-[42px] font-semibold">
        사람들은 이미 알림 받고 있어요
      </p>
      <div className="relative w-full py-12 px-20 bg-neutral-5 rounded-2xl">
        <p className="text-[26px] text-neutral-70 font-bold">
          모임, 찾지 말고 알림 받으세요!
        </p>
        <p className="text-lg text-neutral-60 mb-6">
          알림 설정하면 내 관심사와 맞는 모임을 빠르게 알려드러요
        </p>
        <ButtonRound content="알림받기" theme="neutral" />
        <Image
          className="absolute right-0 top-[13px]"
          src="images/gathering/bell.svg"
          width={230}
          height={230}
          alt="bell"
        />
      </div>
    </section>
  );
};

export default GatheringGuideSection;
