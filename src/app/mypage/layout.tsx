import MyPageBannerSection from './(components)/section/MyPageBannerSection';
import SideBarSection from './(components)/section/SideBarSection';

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative">
        <MyPageBannerSection />
        <div className="py-[74px] pl-[408px] pr-[48px]">
          <div className="max-w-screen-xl mx-right">{children}</div>
        </div>
        <div className="absolute top-[93px] left-[80px]">
          <SideBarSection />
        </div>
      </div>
    </>
  );
};

export default MyPageLayout;
