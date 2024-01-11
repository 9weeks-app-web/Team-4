type RoundButtonProps = {
  color: 'blue' | 'gray';
  content: string;
};

const RoundButton = (props: RoundButtonProps) => {
  const colorVariants = {
    blue: 'text-primary-100 border-primary-100 font-bold bg-primary-20',
    gray: 'text-neutral-60 border-neutral-30 font-medium',
  };
  return (
    <button
      className={`${
        colorVariants[props.color]
      } h-[44px] px-[31px] border-[1px] rounded-full text-[18px]`}
    >
      {props.content}
    </button>
  );
};

export default RoundButton;
