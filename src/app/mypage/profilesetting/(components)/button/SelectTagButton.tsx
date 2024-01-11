const SelectTagButton = ({ content }: { content: string }) => {
  return (
    <button className="py-[12px] px-[20px] rounded-full font-bold border-[1px] border-primary-70 bg-primary-20 text-[16px] text-primary-100">
      {content}
    </button>
  );
};

export default SelectTagButton;
