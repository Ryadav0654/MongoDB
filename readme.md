# MongoDB(with compass):

> Documentation:
> https://www.mongodb.com/docs/manual/

👉 Data store in BSON format not in JSON

👉 Document - Mongo stores data in form of documents(BSON docs)

👉 Collection - MongoDB stores documents in collections.

<img src="/assets/dbs_stucture.png" >

### Insert in DB

```js
// use to show the collection
show collections

// use to insert one or many documnets
db.collection.insertOne(documents)
db.collection.insertOne(array of documents)

//for example:
db.student.insertOne({name: "adam", marks: 78})
db.student.insertOne([{name: "adam", marks: 78},{name: "lofi", marks: 88}])

// use to return everything
db.student.find()

// use for specific queries
db.student.find({key: value})
db.student.findOne({key: value})
```

👉 if a collection does not exist, MongoDB creates the collection when you first store the data for that collection

## query Operator:

> https://www.mongodb.com/docs/manual/reference/operator/query/

# Mongoose(with mongoDB)

> Documentation:
> https://mongoosejs.com/

👉 A library that creates a connection between MongoDB and nodejs javascript runtime environment.

👉 It is an ODM(object Data modeling) Library.

## Installation and setup

👉 use `npm i mongoose` to install the mongoose

```js
// Connect to database

const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/test")

//execute the main function
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/database_name");
}
```

# Schema

👉 Schema defines the shape of the documents within that collection.

### Example:

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
```

## Models

👉 Model in mongoose is a class with which we construct documents.

```js
// syntax: const Modelname = mongoose.model("collectionName", schemaName) ModelName === collectionName
const User = mongoose.model("User", userSchema);
```

## Insert the data

```js
// Insert one data

const user1 = new User({
  name: "ravi",
  email: "ravi@google.com",
  age: 18,
});

user1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Insert multiple data

User.insertMany([
  {
    name: "Tony",
    email: "tony@yahoo.in",
    age: 45,
  },
  {
    name: "Adam",
    email: "adam@yahoo.in",
    age: 64,
  },
  {
    name: "Henry",
    email: "henry@yahoo.in",
    age: 35,
  },
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

👉Note: Mongoose lets you start using your models immediately without waiting for mongoose to establish a connection to MongoDB.

## Find

`Model.find()` // returns a query Object (thennable)

👉 Mongoose queries are not promise. But they have a .then()

```js
User.find().then((data) => {
  console.log(data);
});

User.findById("665087b324ce60f81a9f48f4").then((data) => {
  console.log(data);
});

User.find({ age: { $gte: 47 } }).then((data) => {
  console.log(data);
});

// Model.findOne() return only one
User.findOne({ age: { $gte: 47 } }).then((data) => {
  console.log(data);
});
```

## Update

`Model.updateOne()` or `Model.updateMany()`

```js
//Model.updateOne()
User.updateOne({ name: "Bruce" }, { age: 49 }).then((res) => {
  console.log(res);
});

// Model.updateMany()
User.updateMany({ age: { $gt: 45 } }, { age: 45 }).then((res) => {
  console.log(res);
});

// find and update
//Model.findOneAndUpdate()
User.findOneAndUpdate({ name: "Bruce" }, { age: 49 }).then((res) => {
  console.log(res);
});
```

## Delete

```js
//Model.deleteOne()
User.deleteOne({ name: "Bruce" }).then((res) => {
  console.log(res);
});

// Model.deleteMany()
User.deleteMany({ age: { $gt: 45 } }).then((res) => {
  console.log(res);
});

//Model.deleteOne()
User.deleteOne({ name: "Bruce" }).then((res) => {
    console.log(res);
  });
  
  // Model.findByIdAndDelete()
  User.findByIdAndDelete("665087b324ce60f81a9f48f4").then((res) => {
    console.log(res);
  });

```

## Schema validation

```js

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },

});
```

## Schema options

👉 required, min, default etc.



