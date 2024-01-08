import { NextResponse } from 'next/server';
import { gatheringGridCardDummy } from './(dummy)';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const gatheringType = searchParams.get('type');
  const page = Number(searchParams.get('page'));
  const skill = searchParams.get('skill');
  const job = searchParams.get('job');
  const position = searchParams.get('position');
  const _way = searchParams.get('way');
  const res = { size: 0, cardList: {} };

  let data = gatheringGridCardDummy;

  if (skill && skill !== 'null') {
    data = data.filter(({ skills }) => skills?.includes(skill));
  }
  if (job && job !== 'null') {
    data = data.filter(({ jobs }) => jobs?.includes(job));
  }

  if (position && position !== 'null') {
    data = data.filter(({ positions }) => positions?.includes(position));
  }

  if (_way && _way !== 'null') {
    data = data.filter(({ way }) => way === _way);
  }

  if (gatheringType === 'all') {
    res.size = data.length;
    res.cardList = data.slice(12 * page - 12, 12 * page);
  } else {
    data = data.filter(({ type }) => type === gatheringType);

    res.size = data.length;
    res.cardList = data.slice(12 * page - 12, 12 * page);
  }

  return NextResponse.json({
    ...res,
  });
}
