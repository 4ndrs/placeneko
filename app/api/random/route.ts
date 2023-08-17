import { readdirSync, readFileSync } from "fs";

import path from "path";

export const dynamic = "force-dynamic";

const kanadePath = path.join(process.cwd(), "nekos/beast-tamer/kanade");
const kanades = readdirSync(kanadePath).map((filename) =>
  path.join(kanadePath, filename),
);

const franPath = path.join(process.cwd(), "nekos/tenken/fran");
const frans = readdirSync(franPath).map((filename) =>
  path.join(franPath, filename),
);

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  let nekos: string[];

  const nekoFilter = searchParams.get("nekos")?.split(",") || ["all"];

  const filterHasAllAvailableNekos =
    nekoFilter.includes("all") ||
    (nekoFilter.includes("kanade") && nekoFilter.includes("fran"));

  const filterDoesNotHaveValidNekos =
    !nekoFilter.includes("all") &&
    !nekoFilter.includes("kanade") &&
    !nekoFilter.includes("fran");

  if (filterHasAllAvailableNekos || filterDoesNotHaveValidNekos) {
    nekos = [...kanades, ...frans];
  } else if (nekoFilter.includes("kanade")) {
    nekos = [...kanades];
  } else {
    nekos = [...frans];
  }

  const randomIndex = Math.floor(Math.random() * nekos.length);

  const nekoBuffer = readFileSync(nekos[randomIndex]);

  return new Response(nekoBuffer, {
    headers: {
      "Content-Type": "image/jpg",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
