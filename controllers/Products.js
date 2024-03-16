// import { productsDetails } from "../constants/Data.js";
import { Product } from "../schema/Products.js";

// for insert the product
export const productInsert = async (req, res) => {
  console.log("file" , req.file)
  const { filename } = req.file;
  const {
    productTitle,
    productBrief,
    price,
    quantity,
    discount,
  } = req.body;

  try {
    const newProductFile = await Product.create({
      productTitle: productTitle,
      quantity: quantity,
      productBrief: productBrief,
      discount:discount,
      price: price,
      url : filename
    });
 

    if(newProductFile){
        res.status(200).send("Product inserted successfully");
        // console.log(first)
    }
  } catch (error) {
    console.error("Inserting failed:", error);
    res.status(500).send("Internal Server Error");
  }
};
// const handleEditorChange = (newValue) => {
//   setEditorValue(newValue);
// };

// for get the product
export const getAllProducts = async (req, res) => {
  // console.log("first")
  
  try {
    const products = await Product.find();
    console.log(products)
    res.send({ products: products.reverse() });
  } catch (error) {
    console.error("Fetching failed:", error);
    res.status(500).send("Internal Server Error");
  }
};

//for delete product
export const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;
   const productDelete  = await Product.findOneAndDelete({_id:id})
    // console.log(productDelete)
    res.status(200)
    .json({
      messge:"Product deleted successfully",
      data:productDelete
    })
    
  } catch (error) {
    console.error("delete failed", error);
    res.status(500)
    .json({
      messge:"Internal Server Error",
    })
  }
}

// For get single product 
export const getProduct = async (req , res) =>{
     try {
      const {id} = req.params;
     
      console.log(id)
      const getOneProduct = await Product.findById({_id:id})
      console.log(getOneProduct)
      if (getOneProduct) {
        res.status(200)
        .json({
          messge:"product sucessfully",
          data:getOneProduct
        })
      } else {
        res.status(400)
        .json({
          messge:"product not added"
        })
      }

     } catch (error) {
      console.error("internal error",error);
      res.status(500)
      .json({
        messge:"something error while getting product"
      })
     }

}