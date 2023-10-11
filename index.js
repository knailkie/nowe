const mongoString = "mongodb+srv://nikospokojest:KupaDupa123@knak.vithec9.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require("mongodb");
const client = MongoClient(mongoString);
async function main() {
await client.connect();
await client.close();
}
main();