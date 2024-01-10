import { NextResponse } from 'next/server';
import { retrospectCardDummy } from '../(dummy)/retrospect';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page'));
  const res = { size: 0, cardList: {} };

  if (page) {
    res.size = retrospectCardDummy.length;
    res.cardList = retrospectCardDummy.slice(12 * page - 12, 12 * page);
  } else {
    const data = retrospectCardDummy.map(
      ({
        id,
        type,
        title,
        teamName,
        thumbnail,
        profileImage,
        likes,
        hits,
      }) => ({
        id,
        type,
        title,
        teamName,
        thumbnail,
        profileImage,
        likes,
        hits,
      }),
    );

    res.size = 8;
    res.cardList = data.slice(0, 8);
  }

  return NextResponse.json({
    ...res,
  });
}
