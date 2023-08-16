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

const nekos = [...kanades, ...frans];

export const GET = async () => {
  const randomIndex = Math.floor(Math.random() * nekos.length);

  const nekoBuffer = readFileSync(nekos[randomIndex]);

  return new Response(nekoBuffer, {
    headers: {
      "Content-Type": "image/jpg",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
