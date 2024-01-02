'use client';

import { useState } from 'react';
import PortfolioCategory from './Category';
import { PortfolioPageCategory } from '@/types/portfolio';
import PortfolioListContents from './Contents';

const PortfolioListContainer = () => {
  const [category, setCategory] = useState<PortfolioPageCategory>('전체');

  return (
    <div className="w-full mt-14">
      <div className="w-full">
        <PortfolioCategory category={category} setCategory={setCategory} />
      </div>
      <div className="w-full">
        <PortfolioListContents category={category} />
      </div>
      <div className="w-full h-[500px]">배너영역</div>
    </div>
  );
};

export default PortfolioListContainer;
