const PortfoliosUploadLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-[980px] bg-neutral-10">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default PortfoliosUploadLayout;
