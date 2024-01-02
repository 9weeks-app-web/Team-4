const ButtonRound = ({ content }: { content: string }) => {
  return (
    <button className="px-[30px] py-[15px] text-[18px] border border-primary-90 rounded-[100px] text-primary-90 bg-neutral-0 hover:text-neutral-0 hover:bg-primary-90">
      {content}
    </button>
  );
};

export default ButtonRound;
