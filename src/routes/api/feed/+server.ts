import prisma from '$lib/prisma'
import { json } from '@sveltejs/kit'

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface BigInt {
  /** Convert to BigInt to string form in JSON.stringify */
  toJSON: () => string;
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};


export async function GET() {
  const feed = await prisma.t_users.findMany()
  return json(feed)
}