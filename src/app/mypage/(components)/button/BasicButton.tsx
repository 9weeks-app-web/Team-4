type BasicButtonProps = {
  color: 'blue' | 'gray';
  content: string;
};

const BasicButton = (props: BasicButtonProps) => {
  const colorVariants = {
    blue: 'text-primary-100 border-primary-100',
    gray: 'text-neutral-30 border-neutral-30',
  };
  return (
    <button
      className={`${
        colorVariants[props.color]
      } h-[44px] px-[31px] border-[1px] rounded-[6px] rounded-lg text-[18px] font-semibold`}
    >
      {props.content}
    </button>
  );
};

export default BasicButton;
