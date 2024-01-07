import { NextResponse } from 'next/server';
import { portfolioDummys } from '../(dummys)';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const portfolioId = parseInt(searchParams.get('portfolioId')!);
  const userId = parseInt(searchParams.get('userId')!);

  let portfolioList = portfolioDummys.filter(e => {
    return e.portfolioId !== portfolioId && e.userId === userId;
  });

  return NextResponse.json({ portfolioList });
}
