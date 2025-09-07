const express = require("express");
const app = express();

//middleware

app.use(express.json());

let books = [
  {
    id: "1",
    title: "book1",
  },
  {
    id: "2",
    title: "book2",
  },
];

// get all books routes
app.get("/", (req, res) => {
  res.json({
    message: "welcome to our book store api",
  });
});

app.get("/get", (req, res) => {
  res.json(books);
});

//get single book
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "book not found with this id",
    });
  }
});
app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "new book is added successfully",
  });
});
// update a book
app.put("/update/:id", (req, res) => {
  const findcurrentbook = books.find(
    (bookitem) => bookitem.id === req.params.id
  );
  if (findcurrentbook) {
    findcurrentbook.title = req.body.title || findcurrentbook.title;
    res.status(200).json({
      message: `Book with id ${req.params.id} updated succesfully`,
      data: findcurrentbook,
    });
  } else {
    res.status(404).json({
      message: "book not found",
    });
  }
});
//delete id

app.delete("/delete/:id", (req, res) => {
  const findindexofcurrentbook = books.findIndex(
    (item) => item.id === req.params.id
  );

  if (findindexofcurrentbook !== -1) {
    const dletedBook = books.splice(findindexofcurrentbook, 1);
    res.status(200).json({
      message: "book deleted successfuly",
      data: dletedBook[0],
    });
  } else {
    res.status(404).json({
      message: "book not found",
    });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log("server is running in port 3000");
});
