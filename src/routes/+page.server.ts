import type { t_users } from "@prisma/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const response = await fetch('/api/feed');
  return { users: (await response.json()) as t_users[] };
};
