import { getXataClient } from '@/xata';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const xata = getXataClient();
    
    const newBusiness = await xata.db.BUSINESSES.create({
      BusinessName: body.BusinessName,
      BusinessType: body.BusinessType,
      BusinessLogoLink: body.BusinessLogoLink,
    });

    return NextResponse.json(newBusiness);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating business' }, { status: 500 });
  }
}
