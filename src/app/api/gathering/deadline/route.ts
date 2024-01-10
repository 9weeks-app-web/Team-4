import { NextResponse } from 'next/server';
import { gatheringCardDummy } from '../(dummy)';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') || 'projcet';

  return NextResponse.json({
    cardList: gatheringCardDummy.filter(card => card.type === type),
  });
}
