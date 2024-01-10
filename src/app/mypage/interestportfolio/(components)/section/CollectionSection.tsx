import BasicButton from "@/app/mypage/(components)/button/BasicButton"
import CollectionCard from "../card/CollectionCard"

const CollectionSection = () => {
    return (
        <>
            <div className="flex justify-end space-x-4 pt-[24px] pb-[48px]">
                <BasicButton color="gray" content="추가" />
                <BasicButton color="gray" content="편집" />
            </div>
            <div className="grid grid-cols-3 gap-6 mb-12">
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
            </div>
        </>
    )
}

export default CollectionSection