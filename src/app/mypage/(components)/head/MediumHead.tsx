
const MediumHead = ({ title, content }: { title: string, content: string }) => {
    return (
        <div className="flex flex-col">
            <div className="text-[22px] font-semibold pb-[20px]">{title}</div>
            <div className="text-[14px] text-neutral-60">{content}</div>
        </div>
    )
}

export default MediumHead