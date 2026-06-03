import type { Metadata } from 'next';
import AreaPage from '../../components/AreaPage';
import { emirates, buildAreaMetadata } from '../../lib/areas';

const EMIRATE = 'sharjah';
type Props = { params: Promise<{ area: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return emirates[EMIRATE].areas.map((a) => ({ area: a.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  return buildAreaMetadata(EMIRATE, area);
}
export default async function Page({ params }: Props) {
  const { area } = await params;
  return <AreaPage emirateKey={EMIRATE} slug={area} />;
}
