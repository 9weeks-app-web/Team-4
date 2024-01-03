import { NextResponse } from 'next/server';
import { recommendCardDummy } from '../(dummy)';

export async function GET() {
  return NextResponse.json({ recommendCardDummy });
}
