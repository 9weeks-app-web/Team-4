import { NextResponse } from 'next/server';
import { retrospectCardDummy } from '../(dummy)';

export async function GET() {
  return NextResponse.json({ retrospectCardDummy });
}
