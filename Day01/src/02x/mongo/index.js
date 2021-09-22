(async () => {
    const { MongoClient } = require('mongodb')
    const client = new MongoClient(
        'mongodb://localhost:27017',
        {
            useNewUrlParser: true
        }
    );
    let ret = await client.connect();
    const test_db = client.db('test');
    const fruits = test_db.collection('fruits');
    ret = await fruits.insertOne({
        name: "芒果",
        price: 3.5
    });
    console.log('insert: ', ret);
})();