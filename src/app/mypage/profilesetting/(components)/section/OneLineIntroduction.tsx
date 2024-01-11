import BasicButton from '../../../(components)/button/BasicButton';
import MediumHead from '@/app/mypage/(components)/head/MediumHead';

const OneLineIntroduction = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="text-[#FF3636] mr-[3px]">*</div>
        <div className="text-[22px] font-semibold">한 줄 소개</div>
      </div>
      <div className="text-right mt-[4px] mb-[24px]">
        <BasicButton color="gray" content="편집" />
      </div>
      <textarea
        className="w-full h-[120px] p-4 border border-neutral-10 resize-none rounded-lg mb-3"
        placeholder="간단한 한 줄 소개로 다른 사용자에게 나를 알려보세요."
      />
    </>
  );
};

export default OneLineIntroduction;
