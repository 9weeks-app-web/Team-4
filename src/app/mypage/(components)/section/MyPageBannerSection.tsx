import Image from 'next/image';
import uploadBtn from '/public/images/mypage/img_upload_icon.png';

const MyPageBannerSection = () => {
  return (
    <div
      className="w-full h-[273px] flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(to right, #CFE0FF , #E5EEFF)',
      }}
    >
      <div className="text-neutral-30 text-center space-y-[12px]">
        <div className="w-[32px] h-[32px] mx-auto">
          <Image src={uploadBtn} alt="이미지 업로드" />
        </div>
        <div className="text-[18px]">이미지 업로드</div>
      </div>
    </div>
  );
};

export default MyPageBannerSection;
