'use client';

import { useState } from 'react';
import PortfolioCategory from './Category';
import { PortfolioPageCategory } from '@/types/portfolio';

const PortfolioListContainer = () => {
  const [category, setCategory] = useState<PortfolioPageCategory>('전체');

  return (
    <div className="w-full mt-14">
      <div>
        <PortfolioCategory category={category} setCategory={setCategory} />
      </div>
      <div></div>
    </div>
  );
};

export default PortfolioListContainer;
