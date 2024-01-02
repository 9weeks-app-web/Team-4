import React from 'react';
import Layout from '../layout';
import FreeCard from '../freesubject/components/FreeCard';

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
      <FreeCard />
      <FreeCard />
      <FreeCard />
    </section>
  );
};

export default BoardCard;
