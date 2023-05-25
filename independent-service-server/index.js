const express = require('express')
require('dotenv').config();
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//Middleware
app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER2}:${process.env.DB_PASS2}@theshahriyar.nwda4r2.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const serviceCollection = client.db('serviceProvider').collection('services');

    console.log("DB connected");
    
    app.get('/service', async(req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();

      res.send(services);

    });

    app.get('/service/:id', async(req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const service = await serviceCollection.findOne(query)

      res.send(service);
    })

    app.post('/service' , async(req, res) => {
      const newService = req.body
      const result = await serviceCollection.insertOne(newService)
      res.send(result)
    })

    app.delete('/service/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await serviceCollection.deleteOne(query);
      res.send(result);
    })



  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send(`Independent service provider from port ${port}`)
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})