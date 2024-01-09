interface ChipRoundProps {
  content: string;
}

const ChipRound = ({ content }: ChipRoundProps) => {
  return (
    <div className="px-[25px] py-[9px] text-neutral-40 text-lg font-medium border border-neutral-10 rounded-[42px]">
      {content}
    </div>
  );
};

export default ChipRound;
