const ActivityProgressBar = ({
  title,
  startDate,
  endDate,
}: {
  title: string;
  startDate: string;
  endDate: string;
}) => {
  return (
    <div className="flex items-start gap-x-6">
      <div className="flex flex-col items-center">
        <div className="w-[28px] h-[28px] border-[6px] rounded-full border-primary-100 bg-neutral-0" />
        <div
          className="h-[72px]"
          style={{ borderLeft: '2px dashed #999999' }}
        />
      </div>
      <div className="flex flex-col">
        <div className="font-medium text-[20px] text-neutral-90">{title}</div>
        <div className="text-[16px] text-neutral-50">
          <span>{startDate}</span>
          <span>~</span>
          <span>{endDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityProgressBar;
