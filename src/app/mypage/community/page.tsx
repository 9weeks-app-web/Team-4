'use client';
import { useState } from "react";
import MyPostSection from "./(components)/section/MyPostSection";
import MyCommentSection from "./(components)/section/MyCommentSection";
import SavePostSection from "./(components)/section/SavePostSection";
import LargeHead from "../(components)/head/LargeHead";
import TabComponent from "../(components)/button/TabButton";

const CommunityPage = () => {
    const data = [
        {
            id: 0,
            title: "내 게시물",
            section: <MyPostSection />

        },
        {
            id: 1,
            title: "내 댓글",
            section: <MyCommentSection />
        },
        {
            id: 2,
            title: "저장한 게시물",
            section: <SavePostSection />
        },
    ];
    const [index, setIndex] = useState(0);
    return (
        <div className="max-w-[1152px]">
            <div className="pb-[34px]">
                <LargeHead content="커뮤니티 관리" />
            </div>
            <TabComponent data={data} />
        </div>
    )
}

export default CommunityPage