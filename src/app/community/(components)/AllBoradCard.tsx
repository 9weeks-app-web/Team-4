import React from 'react';
import FreeCard from './FreeCard';

interface BoardProps {
  title: string;
}

const BoardCard: React.FC<BoardProps> = ({ title }) => {
  return (
    <section className="mb-11">
      <div className="flex justify-between my-11">
        <div className=" font-bold text-2xl">{title}</div>
        <div className="flex">
          <button className="mr-2">추천</button>
          <button>최신</button>
        </div>
      </div>
      <FreeCard />
    </section>
  );
};

export default BoardCard;
