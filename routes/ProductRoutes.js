
import express from 'express';
import { deleteProduct, detailUpdate, getAllProducts, getProduct, productInsert, searchproduct } from '../controllers/Products.js'
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
// router.post('updatesize/:id',updateSize)
router.put('/updateProduct',detailUpdate);
// router.put('/updateProduct',upload.single("image"),detailUpdates);
router.delete('/deleteData/:id',deleteProduct);
router.get('/gettingProduct/:id',getProduct);
router.get('/searching',searchproduct)
export default router;
