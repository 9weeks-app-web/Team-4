
const BasicButton = ({ content }: { content: string }) => {
    return (
        <button className="h-[44px] py-[1px] px-[21px] border-[1px] rounded-[6px] border-neutral-30 rounded-lg text-[18px] text-neutral-60">
            {content}
        </button>
    )
}

export default BasicButton;