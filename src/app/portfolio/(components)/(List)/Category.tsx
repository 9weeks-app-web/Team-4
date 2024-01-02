'use client';

import { Dispatch, SetStateAction } from 'react';
import { PortfolioPageCategory } from '@/types/portfolio';

const categorys: PortfolioPageCategory[] = [
  '전체',
  'UXUI디자인',
  '서비스 기획',
  '편집 디자인',
  '웹 디자인',
];

const PortfolioCategory = ({
  category,
  setCategory,
}: {
  category: PortfolioPageCategory;
  setCategory: Dispatch<SetStateAction<PortfolioPageCategory>>;
}) => {
  const categoryHandler = (e: PortfolioPageCategory) => {
    setCategory(e);
  };

  return (
    <div className="w-full h-32">
      <div className="w-full text-2xl font-extrabold">
        다양한 직군의 포트폴리오를 만나보세요
      </div>
      <div className="mt-3">
        <nav className="mt-1">
          <ul className="flex">
            {categorys.map(e => (
              <li className="mr-5" key={e}>
                <button
                  onClick={() => {
                    categoryHandler(e);
                  }}
                  className={`p-1 ${
                    category === e
                      ? `font-bold border-b-2 border-b-neutral-100`
                      : `opacity-50 font-bold `
                  }`}
                >
                  {e}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PortfolioCategory;
