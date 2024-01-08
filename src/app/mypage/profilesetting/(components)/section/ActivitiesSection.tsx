import MediumHead from "@/app/mypage/(components)/head/MediumHead"
import BasicButton from "@/app/mypage/(components)/button/BasicButton"
import ActivityProgressBar from "../bar/ActivityProgressBar"
const ActivitiesSection = () => {
    return (
        <div className="mt-[121px]">
            <MediumHead title="활동경험" content="" />
            <div className="text-right mt-[4px] mb-[24px]">
                <BasicButton color="gray" content="편집" />
            </div>
            <div className="">
                <ActivityProgressBar title="(주)와그 - 프로덕트 디자이너" startDate="2023.02.01" endDate="2023.12.31" />
                <ActivityProgressBar title="(주)유니브 - UIUX디자이너 인턴" startDate="2022.01.12" endDate="2022.06.12" />
                <ActivityProgressBar title="(주)에빈코리아 - 웹 디자이너 인턴" startDate="2021.10.04" endDate="2021.12.31" />
            </div>

        </div>
    )
}
export default ActivitiesSection