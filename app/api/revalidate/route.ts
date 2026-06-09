import { updateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { CITY_PAGES_TAG } from '@/sanity/lib/queries';

/**
 * Sanity webhook target. When the client publishes a city page in the Studio,
 * Sanity POSTs here and we revalidate the cityPage tag so both the RAK and UAQ
 * pages refresh within seconds — no manual redeploy needed.
 *
 * Configure in Sanity: API > Webhooks > URL =
 *   https://sofashampooingdubai.com/api/revalidate?secret=YOUR_SECRET
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: 'Invalid secret' }, { status: 401 });
  }

  updateTag(CITY_PAGES_TAG);
  return NextResponse.json({ revalidated: true, tag: CITY_PAGES_TAG, now: Date.now() });
}
