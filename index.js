const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/test")

//execute the main function
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo_db");
}

// Schema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// models(collections)

const User = mongoose.model("User", userSchema);

// Insert one data

/*
const user1 = new User({
    name: "ravi", 
    email: "ravi@google.com", 
    age: 18
});

user1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})



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

// find

// User.find().then((data) => {
//     console.log(data);
// });

User.find({ age: { $gte: 47 } }).then((data) => {
  console.log(data);
});

// update

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

// delete

//Model.deleteOne()
User.deleteOne({ name: "Bruce" }).then((res) => {
    console.log(res);
  });
  
  // Model.deleteMany()
  User.deleteMany({ age: { $gt: 45 } }, { age: 45 }).then((res) => {
    console.log(res);
  });
*/

  // Model.findByIdAndDelete()
  User.findByIdAndDelete("665087b324ce60f81a9f48f2").then((res) => {
    console.log(res);
  });

  
