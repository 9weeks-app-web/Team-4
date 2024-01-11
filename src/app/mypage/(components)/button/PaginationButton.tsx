const PaginationButton = () => {
  return (
    <div className="flex justify-center items-center space-x-5">
      <button className="text-neutral-50 text-[16px]">{`<<`}</button>
      <button className="text-neutral-50 text-[16px]">{`<`}</button>
      <button className="text-neutral-50 text-[16px]">1</button>
      <button className="bg-primary-100 text-neutral-0 text-[16px] rounded-full w-[44px] h-[44px] flex items-center justify-center">
        2
      </button>
      <button className="text-neutral-50 text-[16px]">3</button>
      <button className="text-neutral-50 text-[16px]">{`>`}</button>
      <button className="text-neutral-50 text-[16px]">{`>>`}</button>
    </div>
  );
};

export default PaginationButton;
