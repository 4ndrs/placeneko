import { readdirSync, readFileSync } from "fs";

import path from "path";

const nekoDir = "./nekos/beast-tamer/kanade";
const nekos = readdirSync(nekoDir);

export const GET = async () => {
  const randomIndex = Math.floor(Math.random() * nekos.length);

  const nekoPath = path.join(nekoDir, nekos[randomIndex]);
  const nekoBuffer = readFileSync(nekoPath);

  return new Response(nekoBuffer, { headers: { "Content-Type": "image/jpg" } });
};