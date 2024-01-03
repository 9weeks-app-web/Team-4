const ButtonBasic = ({ content }: { content: string }) => {
  return (
    <button className="px-[30px] py-[15px] text-[18px] rounded-[12px] hover:text-neutral-60 hover:bg-neutral-10 text-neutral-0 bg-primary-90">
      {content}
    </button>
  );
};

export default ButtonBasic;
