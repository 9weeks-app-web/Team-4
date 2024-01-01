import { NextResponse } from 'next/server';
import { portfolioDummys } from './(dummys)';
import { PortolioList } from '@/types/portfolio';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page')!);

  let portfolioList = [];

  const startIndex = (page - 1) * 16;
  const endIndex = startIndex + 16;

  if (category !== '전체') {
    portfolioList = portfolioDummys.slice(startIndex, endIndex).filter(e => {
      return e.job === category;
    });
  } else {
    portfolioList = portfolioDummys.slice(startIndex, endIndex);
  }
  const endPage = Math.ceil(portfolioList.length / 16) + 1;

  return NextResponse.json({ page, endPage, portfolioList } as PortolioList);
}
