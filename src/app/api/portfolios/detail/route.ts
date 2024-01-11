import { NextResponse } from 'next/server';
import { portfolioDummys } from '../(dummys)';
import { PortfolioDetail } from '@/types/portfolio';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const portfolioId = searchParams.get('portfolioId')!;

  let portfolioDetail: PortfolioDetail | undefined = portfolioDummys.find(e => {
    return e.portfolioId === parseInt(portfolioId);
  });

  if (portfolioDetail) {
    return NextResponse.json(portfolioDetail);
  } else {
    return NextResponse.json({ title: '콘텐츠 없음' });
  }
}
