const PortfoliosUploadLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-[980px] bg-neutral-5">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default PortfoliosUploadLayout;
