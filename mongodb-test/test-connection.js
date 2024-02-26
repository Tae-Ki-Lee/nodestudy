
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Tae:0809@cluster0.hapf2bc.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listenDatabase = await adminDB.listDatabases();
  console.log(listenDatabase);
  return 'OK';
}
run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
