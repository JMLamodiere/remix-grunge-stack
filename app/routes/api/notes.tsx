import type { LoaderFunction } from "@remix-run/node";

import { loader as originalLoader } from "~/routes/notes";

export const loader: LoaderFunction = originalLoader;
