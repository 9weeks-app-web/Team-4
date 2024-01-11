const BasicTagButton = ({ content }: { content: string }) => {
  return (
    <button className="font-bold py-[12px] px-[20px] rounded-full border-[1px] border-neutral-10 text-[16px] text-neutral-60">
      {content}
    </button>
  );
};

export default BasicTagButton;
