
const CategoryButton = ({ content }: { content: string }) => {
    return (
        <button className="border border-neutral-50 text-neutral-50 py-1 px-4 rounded-full">
            {content}
        </button>
    )
}

export default CategoryButton;