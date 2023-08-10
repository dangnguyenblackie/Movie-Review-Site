export default function angle(
  cx: number,
  cy: number,
  ex: number,
  ey: number
): number {
  const ax = ex - cx;
  const ay = ey - cy;

  const rad = Math.atan2(ay, ax);
  const degree = (rad * 180) / Math.PI;

  return degree;
}
