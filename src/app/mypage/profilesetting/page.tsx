import BasicButton from '../(components)/button/BasicButton';
import ActivitiesSection from './(components)/section/ActivitiesSection';
import MyCharacterSection from './(components)/section/MyCharacterSection';
import OneLineIntroduction from './(components)/section/OneLineIntroduction';
import TagCollectionSection from './(components)/section/TagCollectionSection';
import ContactTimeSection from './(components)/section/ContactTimeSection';
import ProgressBar from '../(components)/bar/ProgressBar';
import FollowManageSection from './(components)/section/FollowManageSection';
import LargeHead from '../(components)/head/LargeHead';
import MediumHead from '../(components)/head/MediumHead';
import KeywordSection from './(components)/section/KeywordSection';
import Image from 'next/image';
import help from '/public/images/mypage/help_icon.png';

const ProfileSettingPage = () => {
  return (
    <div className="max-w-[1152px]">
      <div className="mb-[58px]">
        <div className="mb-[8px] flex items-center">
          <LargeHead content="프로필 완성도" />
          <div className="text-primary-100 ml-[4px]">
            <LargeHead content="3단계" />
          </div>
          <div className="w-[18px] h-[18px ml-[10px]]">
            <Image src={help} />
          </div>
        </div>
        <div className="text-neutral-60 font-medium text-[14px]">
          프로필 완성도가 높을수록 더 많은 프로젝트 제안을 받을 수 있어요.
        </div>
      </div>
      <div className="w-full">
        <ProgressBar progress={38} />
      </div>
      <div className="text-right text-[16px] text-primary-100 pt-[10px]">
        <span>완성까지 5단계 남았어요!</span>
      </div>
      <MyCharacterSection />
      <div className="mt-[110px] mb-[104px]">
        <div className="mb-[8px] flex flex-col">
          <LargeHead content="자기소개 카드" />
          <div className="text-neutral-60 font-medium text-[14px] mt-[10px]">
            나를 소개하는 다양한 목록들을 채워나갈 수록, 프로젝트/스터디 참여
            성공률이 올라갈 수 있어요.
          </div>
        </div>
      </div>
      <OneLineIntroduction />
      <TagCollectionSection />
      <KeywordSection />
      <ActivitiesSection />
      <ContactTimeSection />
      <FollowManageSection />
    </div>
  );
};

export default ProfileSettingPage;
