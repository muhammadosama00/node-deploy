const model = require("../model/product");
const Product = model.Product;

exports.createProduct = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = new Product(data);
    const response = await newProduct.save();

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

exports.getProduct = async (req, res) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

exports.replaceProduct = async (req, res) => {
  try{
  console.log(req.params.id);
  const id = req.params.id;
  const doc = await Product.findOneAndReplace({_id: id}, req.body, {new: true})
  res.status(200).json(doc);
  }catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

exports.updateProduct = async (req, res) => {
  try{
  console.log(req.params.id);
  const id = req.params.id;
  const doc = await Product.findOneAndUpdate({_id: id}, req.body, {new: true})
  res.status(200).json(doc);
  }catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try{
  console.log(req.params.id);
  const id = req.params.id;
  const doc = await Product.findOneAndDelete({_id: id})
  res.status(200).json(doc);
  }catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};











// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
// // console.log(data);

// exports.createProduct = (req, res) => {
//   console.log(req.body);
//   products.push(req.body);
//   res.json(req.body);
// };

// exports.getAllProducts = (req, res) => {
//   res.json(products);
// };

// exports.getProduct = (req, res) => {
//   console.log(req.params.id);
//   const id = +req.params.id;
//   const newProduct = products.find((p) => p.id === id);
//   res.json(newProduct);
// };

// exports.replaceProduct = (req, res) => {
//   console.log(req.params.id);
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   products.splice(productIndex, 1, { ...req.body, id: id });
//   res.status(200).json();
// };

// exports.updateProduct = (req, res) => {
//   console.log(req.params.id);
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   const product = products[productIndex];
//   products.splice(productIndex, 1, { ...product, ...req.body });
//   res.status(200).json();
// };

// exports.deleteProduct = (req, res) => {
//   console.log(req.params.id);
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   const product = products[productIndex];
//   products.splice(productIndex, 1);
//   res.status(200).json(product);
// };
