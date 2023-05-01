import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dataPath = path.join(process.cwd(), "public", "graph_data.json");
  const rawData = fs.readFileSync(dataPath, "utf-8");
  const data = JSON.parse(rawData);
  res.status(200).json(data);
};
