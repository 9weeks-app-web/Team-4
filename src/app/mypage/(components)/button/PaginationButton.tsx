
const PaginationButton = () => {
    return (
        <div className="flex justify-center items-center mb-12 pr-[45px]">
            <div className="text-neutral-50 px-4 py-2 rounded">{`<<`}</div>
            <div className="text-neutral-50 px-4 py-2 rounded">{`<`}</div>
            <div className="text-neutral-50 px-4 py-2 rounded">1</div>
            <div className="text-neutral-50 px-4 py-2 rounded">2</div>
            <div className="text-neutral-50 px-4 py-2 rounded">3</div>
            <div className="text-neutral-50 px-4 py-2 rounded">{`>`}</div>
            <div className="text-neutral-50 px-4 py-2 rounded">{`>>`}</div>
        </div>
    )
}

export default PaginationButton