import RoundButton from '@/app/mypage/(components)/button/RoundButton';
import SelectTagButton from '../button/SelectTagButton';

const TagCollectionSection = () => {
  return (
    <>
      <div className="mt-[148px]">
        <div className="flex items-center mb-[24px]">
          <div className="text-[22px] font-semibold">스킬</div>
        </div>
        <div className="flex gap-3 w-full flex-wrap">
          <RoundButton content="Adobe XD" color="gray" />
          <RoundButton content="Adobe Photoshop" color="gray" />
          <RoundButton content="Adobe Illustrator" color="gray" />
          <RoundButton content="Indesign" color="gray" />
          <RoundButton content="Figma" color="gray" />
          <RoundButton content="Sketch" color="gray" />
          <RoundButton content="Protopie" color="gray" />
          <RoundButton content="blender" color="gray" />
          <RoundButton content="Zeplin" color="gray" />
          <RoundButton content="Indesign" color="blue" />
          <RoundButton content="Figma" color="blue" />
          <RoundButton content="Sketch" color="blue" />
          <RoundButton content="+" color="gray" />
        </div>
      </div>
      <div className="mt-[148px]">
        <div className="flex items-center mb-[24px]">
          <div className="text-[#FF3636] mr-[3px]">*</div>
          <div className="text-[22px] font-semibold">관심 분야</div>
        </div>
        <div className="flex gap-3 w-full flex-wrap">
          <RoundButton content="UXUI" color="gray" />
          <RoundButton content="서비스 기획" color="gray" />
          <RoundButton content="웹 개발" color="gray" />
          <RoundButton content="앱 개발" color="gray" />
          <RoundButton content="영상 편집" color="gray" />
          <RoundButton content="웹 디자인" color="gray" />
          <RoundButton content="3D그래픽" color="gray" />
          <RoundButton content="AI" color="gray" />
          <RoundButton content="AI" color="gray" />
          <RoundButton content="AI" color="blue" />
          <RoundButton content="AI" color="blue" />
          <RoundButton content="+" color="gray" />
        </div>
      </div>
    </>
  );
};

export default TagCollectionSection;
