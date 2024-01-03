import { NextResponse } from 'next/server';
import { gatheringCardDummy } from '../(dummy)';

export async function GET() {
  return NextResponse.json({ gatheringCardDummy });
}
