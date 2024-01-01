const ShowMoreButton = ({ content }: { content: string }) => {
    return (
        <button className="inline text-sm text-neutral-50 py-[12px] px-[16px]">
            {content} &gt;
        </button>
    );
};

export default ShowMoreButton;
