import BasicButton from '../../../(components)/button/BasicButton';
import MediumHead from '@/app/mypage/(components)/head/MediumHead';
import Image from 'next/image';
import help from '/public/images/mypage/help_icon.png';

const MyCharacterSection = () => {
  return (
    <div className="mt-[121px]">
      <div className="">
        <div className="mb-[15px] flex items-center gap-x-[8px]">
          <div className="text-[#FF3636]">*</div>
          <div className="text-[22px] font-semibold">내 캐릭터</div>
          <div className="w-[18px] h-[18px ml-[10px]]">
            <Image src={help} />
          </div>
        </div>
        <div className="text-neutral-60 font-medium text-[14px]">
          본 캐릭터와 부 캐릭터를 선택해 다른 사용자에게 내 분야를 알릴 수
          있어요.
        </div>
      </div>
      <div className="text-right mt-[4px] mb-[24px]">
        <BasicButton color="gray" content="편집" />
      </div>
      <div className="flex w-full p-2 rounded-[5px] border-neutral-10 border-[1px] px-[78px] py-[34px]">
        <div className="flex flex-col flex-1">
          <div className="text-[16px] font-bold mb-[10px]">본 캐릭터</div>
          <div className="flex-row flex">
            <div className="flex justify-between">
              <span className="text-[16px] text-neutral-60 mr-[28px]">
                직무
              </span>
              <span className="text-[16px] text-primary-100 mr-[95px]">
                UX/UI 디자인
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] text-neutral-60 mr-[28px]">
                능력치
              </span>
              <span className="text-[16px] text-primary-100">고수</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-[16px] font-bold mb-[10px]">부 캐릭터</div>
          <div className="flex-row flex">
            <div className="flex justify-between">
              <span className="text-[16px] text-neutral-60 mr-[28px]">
                직무
              </span>
              <span className="text-[16px] text-primary-100 mr-[95px]">
                서비스 기획
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] text-neutral-60 mr-[28px]">
                능력치
              </span>
              <span className="text-[16px] text-primary-100">초보</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCharacterSection;
