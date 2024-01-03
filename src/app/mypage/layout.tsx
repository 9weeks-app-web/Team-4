import MyPageBannerSection from "./(components)/section/MyPageBannerSection";
import SideBarSection from "./(components)/section/SideBarSection"

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <div className="relative">
            <MyPageBannerSection />
            <div className="absolute top-[93px] left-[80px]">
                <SideBarSection />
            </div>
            <div className="ml-[408px] mt-[74px]">
                <div className="max-w-screen-xl mx-auto px-4">
                    {children}
                </div>
            </div>
        </div>
    </>;
};

export default MyPageLayout;