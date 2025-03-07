const express = require("express");
const cors = require("cors");
require("dotenv").config();
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;

//Use middleware
app.use(express.json());
app.use(cors());

//MongoDB setup
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mern-job-portal.u4ixp0z.mongodb.net/?retryWrites=true&w=majority&appName=mern-job-portal`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //Create db
    const db = client.db("mern-job-portal");
    //Collections
    const jobCollections = db.collection("demo-jobs");

    //Post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      //Insert
      const result = await jobCollections.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Cannot add this job. Try again later!",
          status: false,
        });
      }
    });

    //Get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollections.find({}).toArray();
      res.send(jobs);
    });

    //Get single job using id
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobCollections.findOne({
        _id: new ObjectId(id),
      });
      res.send(job);
    });

    //Fetch jobs based on user's email at the MyJobs page
    app.get("/my-jobs/:email", async (req, res) => {
      //console.log(req.params.email)
      const jobs = await jobCollections
        .find({ postedBy: req.params.email })
        .toArray();
      res.send(jobs);
    });

    //Delete a job form MyJobs page
    app.delete("/delete-job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobCollections.deleteOne(filter);
      res.send(result);
    });

    //Update/Edit a job from MyJobs page
    app.patch("/edit-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;

      //Filter jobs
      const filter = { _id: new ObjectId(id) };
      const options = { upset: true };
      const updateDoc = {
        $set: {
          ...jobData,
        },
      };
      const result = await jobCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Developer!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
