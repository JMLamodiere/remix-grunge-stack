import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { requireUserIdOr401 } from "~/session.server";
import { getNoteListItems } from "~/models/note.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserIdOr401(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
};
