import BasicButton from "@/app/mypage/(components)/button/BasicButton"
import PostCard from "../card/PostCard"
import PaginationButton from "@/app/mypage/(components)/button/PaginationButton"
import SelectBoxButton from "@/app/mypage/(components)/button/SelectBoxButton"

const MyPostSection = () => {
    return (
        <>
            <div className="flex justify-end space-x-4 py-[24px]">
                <SelectBoxButton options={['최신순', '오래된순', '인기순']} />
            </div>
            <div className="grid gap-6">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className="pt-[80px]">
                <PaginationButton />
            </div>
        </>
    )
}

export default MyPostSection