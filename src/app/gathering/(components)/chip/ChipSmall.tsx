interface ChipSmallProps {
  content: string;
}

const ChipSmall = ({ content }: ChipSmallProps) => {
  return (
    <div className=" w-fit px-2 py-[5px] text-xs text-neutral-60 font-semibold rounded-md bg-neutral-5">
      {content}
    </div>
  );
};

export default ChipSmall;
