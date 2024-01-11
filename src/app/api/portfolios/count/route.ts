import { NextResponse } from 'next/server';
import { portfolioDummys } from '../(dummys)';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let portfolioList = [];
  if (category !== '전체') {
    portfolioList = portfolioDummys.filter(e => {
      return e.job === category;
    });
  } else {
    portfolioList = portfolioDummys;
  }
  const count = portfolioList.length;
  return NextResponse.json({ count });
}
