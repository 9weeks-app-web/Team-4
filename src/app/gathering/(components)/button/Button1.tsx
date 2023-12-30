const Button1 = ({ content }: { content: string }) => {
  return (
    <button className="h-fit w-fit py-2 px-3 border-[1px] border-neutral-8 rounded-lg text-sm">
      {content}
    </button>
  );
};

export default Button1;
