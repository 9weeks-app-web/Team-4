import RetrospectBannerSection from './(components)/RetrospectBannerSection';
import RetrospectGridSection from './(components)/RetrospectGridSection';
import ButtonRound from '../(components)/button/ButtonRound';
import Image from 'next/image';

const RetrospectPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <RetrospectBannerSection />
      <div className="relative flex items-center gap-8 min-w-[1200px] h-[130px] py-6 px-10 mt-20 bg-primary-90 rounded-xl">
        <Image
          className=" float-start"
          src="/images/gathering/document.svg"
          width={55}
          height={70}
          alt="document"
        />
        <div className="">
          <p className="text-[26px] text-neutral-0 font-bold">
            프로젝트 회고를 사람들과 나눠보세요
          </p>
          <p className="text-lg text-primary-30 font-semibold">
            회고를 작성하고 프로젝트를 마무리 해보세요
          </p>
        </div>
        <div className="absolute right-12">
          <ButtonRound content="회고 쓰러가기" theme="white" />
        </div>
      </div>
      <RetrospectGridSection />
    </main>
  );
};

export default RetrospectPage;
