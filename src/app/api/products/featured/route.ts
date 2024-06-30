import data from '../data.json';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const featuredProducts = data.products.filter((product) => product.featured);
    return NextResponse.json(featuredProducts);
  } catch (error) {
    console.error('Failed to fetch featured products:', error);
    return NextResponse.json({ error: 'Failed to fetch featured products' }, { status: 500 });
  }
}
