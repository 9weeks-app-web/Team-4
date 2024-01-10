'use client';
import ProjectSection from "./section/ProjectSection";
import StudySection from "./section/StudySection";
import TabComponent from "../../(components)/button/TabButton";
import LargeHead from "../../(components)/head/LargeHead";

const GatheringPage = () => {
    const data = [
        {
            id: 0,
            title: "프로젝트",
            section: <ProjectSection />
        },
        {
            id: 1,
            title: "스터디",
            section: <StudySection />
        },
    ];

    return (
        <div className="max-w-[1152px]">
            <div className="pb-[34px]">
                <LargeHead content="모임 관리" />
            </div>
            <TabComponent data={data} />
        </div>
    )
}

export default GatheringPage