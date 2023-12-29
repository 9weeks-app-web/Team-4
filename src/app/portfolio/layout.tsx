const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-[1200px] w-full ">{children}</div>
    </div>
  );
};

export default PortfolioLayout;
