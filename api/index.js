const express = require("express");
//const cors = require("cors");
require("dotenv").config();

const ProductModel = require("./models/product.model");
const OrderModel = require("./models/order.model");

const app = express();

// Simplify and correct CORS configuration
// const corsConfig = {
//   origin: process.env.ORIGIN, 
// };

//app.use(cors(corsConfig)); 
app.use(express.json()); 

const connectDB = require("./connectMongo");
connectDB();

app.get("/api/v1/products", async (req, res) => {
  try {
    const data = await ProductModel.find({});
    const response = data;
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

app.post("/api/v1/orders", async (req, res) => {
  try {
    const { productname, productprice, quantity, name, phone, address } = req.body;
    const order = new OrderModel({
      productname,
      productprice,
      quantity,
      name,
      phone,
      address,
    });
    const data = await order.save();
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000; // Default to port 5000 if PORT is not set

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});