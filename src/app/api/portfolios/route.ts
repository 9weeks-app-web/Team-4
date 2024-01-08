import { NextResponse } from 'next/server';
import { portfolioDummys } from './(dummys)';
import { PortfolioList } from '@/types/portfolio';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page')!);
  const sort = searchParams.get('sort');

  let portfolioList = [];

  const startIndex = (page - 1) * 16;
  const endIndex = startIndex + 16;

  if (category !== '전체') {
    portfolioList = portfolioDummys.filter(e => {
      return e.job === category;
    });
  } else {
    portfolioList = portfolioDummys;
  }

  if (sort === 'latest') {
    portfolioList.sort((a, b) => {
      return b.createAt.getTime() - a.createAt.getTime();
    });
  } else if (sort === 'popular') {
    portfolioList.sort((a, b) => {
      return b.hit - a.hit;
    });
  } else if (sort === 'recomand') {
    portfolioList.sort((a, b) => {
      return b.like - a.like;
    });
  }
  const endPage = Math.ceil(portfolioList.length / 16);
  portfolioList = portfolioList.slice(startIndex, endIndex);

  return NextResponse.json({ page, endPage, portfolioList } as PortfolioList);
}
