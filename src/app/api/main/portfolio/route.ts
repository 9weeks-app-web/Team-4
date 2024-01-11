import { NextResponse } from 'next/server';
import { DetailPortfolioDummy } from '../(dummy)/portfolio/index';

export async function GET() {
  return NextResponse.json({ cardList: DetailPortfolioDummy });
}
