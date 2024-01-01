import ArrowLeftButton from "../button/ArrowLeftButton"
import ArrowRightButton from "../button/ArrowRightButton"
import HotCreatorCard from "../card/HotCreatorCard"

const HotCreatorSection = () => {
    return (
        <div className="bg-primary-90 p-8 w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-lg font-semibold mb-4 text-neutral-0 ">HOT 크리에이터</h2>
                <div className="flex items-center">
                    <span className="m-5">
                        <ArrowLeftButton />
                    </span>
                    <div className="flex justify-center space-x-4 pb-4 mx-auto">
                        <HotCreatorCard />
                        <HotCreatorCard />
                        <HotCreatorCard />
                    </div>
                    <span className="p-[50px]">
                        <ArrowRightButton />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HotCreatorSection