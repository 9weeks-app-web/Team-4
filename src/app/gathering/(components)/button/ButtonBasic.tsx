const ButtonBasic = ({ content }: { content: string }) => {
  return (
    <button className="px-[30px] py-[15px] text-[18px] rounded-[12px] text-neutral-60 bg-neutral-10 hover:text-neutral-0 hover:bg-primary-90">
      {content}
    </button>
  );
};

export default ButtonBasic;
