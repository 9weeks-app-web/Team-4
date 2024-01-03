
const MidiumHead = ({ title, content }: { title: string, content: string }) => {
    return (
        <div className="flex flex-col space-y-[20px]">
            <div className="text-[22px] font-semibold">{title}</div>
            <div className="text-[14px] text-neutral-60">{content}</div>
        </div>
    )
}

export default MidiumHead