// import { productsDetails } from "../constants/Data.js";
import { Product } from "../schema/Products.js";

export const productInsert = async (req, res) => {
  console.log("file" , req.file)
  const { filename } = req.file;
  const {
    productTitle,
    shortDescription,
    productBrif,
    price,
    // quantity,
    discount,
  } = req.body;

  try {
    const newpf = await Product.create({
      productTitle: productTitle,
      shortDescription: shortDescription,
      productBrief: productBrif,
      discount:discount,
      price: price,
      // quantity: quantity,
      url : filename
    });

    if(newpf){
        res.status(200).send("Product inserted successfully");
    }
  } catch (error) {
    console.error("Inserting failed:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getAllProducts = async (req, res) => {
  // console.log("first")
  try {
    const products = await Product.find();
    // console.log(products)
    res.send({ products: products });
  } catch (error) {
    console.error("Fetching failed:", error);
    res.status(500).send("Internal Server Error");
  }
};
