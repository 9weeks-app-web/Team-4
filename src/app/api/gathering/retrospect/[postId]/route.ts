import { NextResponse } from 'next/server';
import { retrospectDummy } from '../../(dummy)/retrospect';

export async function GET(req: Request) {
  const { pathname } = new URL(req.url);
  const postId = Number(pathname.split('/').at(-1));

  return NextResponse.json({
    retrospect: retrospectDummy.find(({ id }) => id === postId),
  });
}
