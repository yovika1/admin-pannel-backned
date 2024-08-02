import { Category } from "../schema/Category.js";

//addCategory
export const addCategory = async (req, res) => {
    console.log("file", req.file);
    const { filename } = req.file;
    const {name} =
      req.body;
  
    try {
      const newProductFile = await Category.create({
      name : name,
      urlImage :filename
      });
  
      if (newProductFile) {
        res.status(200).send("Category inserted successfully");
      }
    } catch (error) {
      console.error("Inserting failed:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  
  
  // for get the product
  export const getCategory = async (req, res) => {
    console.log("first")
  
    try {
      const CategoryProducts = await Category.find();
      console.log(products);
      res.send({ products: CategoryProducts.reverse() });
    } catch (error) {
      console.error("Fetching failed:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  
  //for delete product
  export const deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const CategoryDelete = await Category.findOneAndDelete({ _id: id });
      res.status(200).json({
        messge: "Product deleted successfully",
        data: CategoryDelete,
      });
    } catch (error) {
      console.error("delete failed", error);
      res.status(500).json({
        messge: "Internal Server Error",
      });
    }
  };

  export const updateCategory = async (req, res) => {
    try {
        const {filename} = req.file;
      const { name,id } = req.body;
       
      console.log(name, id);
      const updates = await Category.updateOne(
        { _id: id },
        { filename,name },
        { new: true }
      );
      console.log(updates);
      if (updates) {
        res.status(200).json({
          message: " product of Category updated successfully",
          data: updates,
        });
      } else {
        res.status(400).json({
          message: "Product not confirm",
        });
      }
    } catch (error) {
      console.error("internal error", error);
      res.status(500).json("something error while updating product", error);
    }
  };
  