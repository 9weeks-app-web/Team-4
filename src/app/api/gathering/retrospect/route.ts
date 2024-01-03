import { NextResponse } from 'next/server';
import { retrospectCardDummy } from '../(dummy)/retrospect';

export async function GET() {
  return NextResponse.json({ retrospectCardDummy });
}
