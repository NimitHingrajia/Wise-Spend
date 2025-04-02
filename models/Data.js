import clientPromise from "@/lib/Mongodb";

export default async function getUsersInfoAdmin() {
  try {
    const client = await clientPromise;
    const db = client.db("Users");
    const GuestInfo = db.collection("Users");
    const result = await GuestInfo.find({}).toArray();
    console.log("result", result);
    return result;
  } catch (error) {
    console.error("Failed to get Data:", error);
    throw error;
  }
}
