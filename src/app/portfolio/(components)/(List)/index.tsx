'use client';

import { useState } from 'react';
import PortfolioCategory from './Category';
import { PortfolioPageCategory } from '@/types/portfolio';
import PortfolioListContents from './Contents';
import Image from 'next/image';

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
      <div className="w-full h-[500px] mt-[80px]">
        <Image
          src={'/portfolios/banner.png'}
          alt="배너"
          width={1200}
          height={373.75}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default PortfolioListContainer;
