require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");
const morgan = require("morgan");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

console.log("env", process.env.DB_PASSWORD);

// db connection

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}

// bodyParser
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,"dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

// app.use(morgan('dev'));
// app.use(morgan('default'));

// app.use(express.static('public'));

// const jsonFilePath = path.join(__dirname, "data.json");
// const htmlFilePath = path.join(__dirname, "index.html");

// console.log("HTML file path:", htmlFilePath);

// app.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent", "Sec-Ch-Ua-Platform"),
//     req.get("Sec-Ch-Ua-Platform")
//   );

//   next();
// });

// const auth = (req, res, next) => {
//   // // console.log(req.query)
//   // if(req.body.password === '123'){

//   //   next()
//   // }else{
//   //   res.sendStatus(401);
//   // }
//   next()
// };

// app.get("/", (req, res) => {
//   res.json({ type: "GET" });
// });

// app.get("/product/:id", (req, res) => {
//   console.log(req.params);
//   res.json({ type: "GET" });
// });

// app.post("/", (req, res) => {
//   res.json({ type: "POST" });
// });

// app.put("/", (req, res) => {
//   res.json({ type: "PUT" });
// });

// app.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });

// app.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });

// app.get("/demo", (req, res) => {
//   // res.status(201).send("<h1>Hello World!</h1>");
//   // res.sendFile(jsonFilePath)
//   // res.sendFile(htmlFilePath)
//   res.json(products);
//   // res.sendStatus(404);
// });
