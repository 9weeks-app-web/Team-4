import Image from "next/image";
const ShowMoreButton = ({ content }: { content: string }) => {
    return (
        <button className="flex items-center text-sm text-neutral-50 py-[12px] pl-[16px]">
            {content} <Image src="/images/main/chevron_right.png" width={24} height={24} />
        </button>
    );
};

export default ShowMoreButton;
