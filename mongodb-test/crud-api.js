const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Tae:0809@cluster0.hapf2bc.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function main() {
  try {
    console.log("DB 접속 성공");
    await client.connect();

    console.log('DB 접속 성공');

    const collection = client.db('test').collection('person');

    await collection.insertOne({ name: 'Tae', age: 27 });
    console.log('문서 추가 완료');

    const document = await collection.find({ name: 'Tae' }).toArray();

    await collection.updateOne({ name: 'Tae' }, { $set: { age: 28 } });
    console.log('문서 업데이트 완료');

    const updateDocumentes = await collection.find({ name: 'Tae' }).toArray();
    console.log('갱신한 문서 : ', updateDocumentes);

    await collection.deleteMany({ name: 'Tae' });
    console.log('문서 삭제');

    await client.close();
  } catch (err) {
    console.log(err);
  }
}
main();
