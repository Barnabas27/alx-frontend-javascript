export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);

  // check position if outside range
  if (position >= length) throw new Error('Position outside range');
  // setting the new value in the desired position
  dv.setInt8(position, value);

  return dv;
}
