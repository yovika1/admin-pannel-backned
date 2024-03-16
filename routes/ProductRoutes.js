
import express from 'express';
import { deleteProduct, getAllProducts, getProduct, productInsert } from '../controllers/Products.js'
import multer from 'multer';


const storage  = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file)
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${file.originalname}`)
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get('/getData', getAllProducts)

router.post('/insertData', upload.single("image"), productInsert);

router.delete('/deleteData/:id',deleteProduct);
router.get('/gettingProduct/:id',getProduct);

export default router;
