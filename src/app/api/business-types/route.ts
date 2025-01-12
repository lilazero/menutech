import { getXataClient } from '@/xata';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const xata = getXataClient();
    const businesses = await xata.db.BUSINESSES.getAll();
    
    // Get unique business types
    const types = [...new Set(businesses.map(b => b.BusinessType))].filter(Boolean);
    
    return NextResponse.json(types);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching business types' }, { status: 500 });
  }
}
