import { readdirSync, readFileSync } from "fs";

import path from "path";

export const dynamic = "force-dynamic";

const kanade = readdirSync(
  path.join(process.cwd(), "nekos/beast-tamer/kanade"),
  { withFileTypes: true },
);

const fran = readdirSync(path.join(process.cwd(), "nekos/tenken/fran"), {
  withFileTypes: true,
});

const nekos = [...kanade, ...fran];

export const GET = async () => {
  const randomIndex = Math.floor(Math.random() * nekos.length);

  const nekoPath = path.join(nekos[randomIndex].path, nekos[randomIndex].name);
  const nekoBuffer = readFileSync(nekoPath);

  return new Response(nekoBuffer, {
    headers: {
      "Content-Type": "image/jpg",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
