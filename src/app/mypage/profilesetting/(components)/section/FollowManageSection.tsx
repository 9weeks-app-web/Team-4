import TabComponent from "@/app/mypage/(components)/button/TabButton"
import MediumHead from "@/app/mypage/(components)/head/MediumHead"
import FollowTable from "../table/FollowTable";

const FollowManageSection = () => {
    const data = [
        {
            id: 0,
            title: "팔로워",
            section: <FollowTable />

        },
        {
            id: 1,
            title: "팔로잉",
            section: <FollowTable />
        },
        {
            id: 2,
            title: "차단목록",
            section: <FollowTable />
        },
    ];
    return (
        <div className="mt-[148px]">
            <div className="mb-[24px]">
                <MediumHead title="팔로우 관리" content="" />
            </div>
            <TabComponent data={data} />

        </div>
    )
}

export default FollowManageSection