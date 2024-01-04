import { NextResponse } from 'next/server';
import { recommendProjectDummy } from '../(dummy)/project';

export async function GET() {
  return NextResponse.json({ recommendProjectDummy });
}
