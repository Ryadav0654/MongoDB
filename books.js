// schema validation 

const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

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
    min: 1
  },
  discount: {
    type: Number,
    default: 0
  }
});

const Book = mongoose.model("Book", bookSchema);

let book3 = new Book({
  title: "Rich Dad and Poor Dad",
  author: "Robert kiyosaki",
  price: 800,
});

book3
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
