import Image from 'next/image';

const AdvertisementSection = () => {
  return (
    <section className="flex min-w-[1200px] h-[448px] gap-[30px] mb-[100px]">
      <div className="relative flex-[3] pl-[63px] bg-primary-10 rounded-2xl">
        <p className="mt-10 text-lg text-primary-100 font-medium \">
          팀 프로젝트 Tip
        </p>
        <p className="relative w-[450px] mt-[61px] text-[64px] font-bold break-keep z-10">
          팀 프로젝트는 반드시 _______가 필요하다.
        </p>
        <Image
          className="absolute right-0 bottom-0"
          src="/images/gathering/person.svg"
          alt="person"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-between flex-[1] p-10 pb-10 bg-[#283A5C] text-neutral-0 rounded-2xl">
        <div>
          <p className="mb-6 text-lg font-medium">스나이퍼팩토리</p>
          <p className="w-[220px] text-[26px] font-bold break-keep">
            팀 프로젝트 참여 전, 내 실력을 올리고 싶다면?
          </p>
        </div>
        <Image
          className="self-center"
          src="/images/gathering/SFAC.svg"
          alt="person"
          width={170}
          height={44}
        />
      </div>
    </section>
  );
};

export default AdvertisementSection;
