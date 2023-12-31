const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex justify-center font-medium">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default PortfolioLayout;
