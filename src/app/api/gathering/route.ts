import { NextResponse } from 'next/server';
import { gatheringGridCardDummy } from './(dummy)';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const gatheringType = searchParams.get('type');
  const page = Number(searchParams.get('page'));
  const res = { size: 0, cardList: {} };

  if (gatheringType === 'all') {
    res.size = gatheringGridCardDummy.length;
    res.cardList = gatheringGridCardDummy.slice(12 * page - 12, 12 * page);
  } else {
    const data = gatheringGridCardDummy.filter(
      ({ type }) => type === gatheringType,
    );

    res.size = data.length;
    res.cardList = data.slice(12 * page - 12, 12 * page);
  }

  return NextResponse.json({
    ...res,
  });
}
