import { NextApiRequest, NextApiResponse } from "next";
import getUsersInfoAdmin from "@/models/Data";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Perform GET operations
    const result = await getUsersInfoAdmin(); // Adjust this according to your model function
    res.status(200).json(result);
    console.log("hello");
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
