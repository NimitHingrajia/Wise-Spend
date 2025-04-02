import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://1998nimzy:nimitadmin@wisespend.8qkie.mongodb.net/?retryWrites=true&w=majority&appName=WiseSpend";

const options = {};

let client;
let clientPromise;

try {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
} catch (error) {
  console.error("Failed to connect to MongoDB:", error);
  // Handle the error appropriately here
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
