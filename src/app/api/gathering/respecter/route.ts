import { NextResponse } from 'next/server';
import { respectGridCardDummy } from '../(dummy)/respecter';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page'));
  const res = { size: 0, cardList: {} };

  res.size = respectGridCardDummy.length;
  res.cardList = respectGridCardDummy.slice(12 * page - 12, 12 * page);

  return NextResponse.json({
    ...res,
  });
}
