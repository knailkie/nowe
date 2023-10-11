const mongoString = "mongodb+srv://nikospokojest:KupaDupa123@knak.vithec9.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require("mongodb");
const client = new MongoClient(mongoString);
async function main() {
    try {
await client.connect();
await listDB(client);
    } catch (error) {
        console.error(error);
    } finally {
       await client.close(); 
    }

}
async function listDB(client) {
    let databaseList = await client.db().admin().listDatabases();
    console.log(databaseList);
}
main();