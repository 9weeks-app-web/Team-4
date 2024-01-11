import { NextResponse } from 'next/server';
import { todayRespecterDummy } from '../../(dummy)/respecter';

export async function GET(req: Request) {
  return NextResponse.json({
    cardList: todayRespecterDummy,
  });
}
