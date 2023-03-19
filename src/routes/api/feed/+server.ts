import prisma from '$lib/prisma'
import { json } from '@sveltejs/kit'

export async function GET() {
  const feed = await prisma.t_users.findMany()
  return json(feed)
}