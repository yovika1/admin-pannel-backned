
import express from 'express';
import { getAllProducts, productInsert } from '../controllers/Products.js'
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
router.get('/',(req,res)=>{
    res.send("products added sucessfully")
})

router.get('/getData', getAllProducts)

router.post('/insertData', upload.single("image"), productInsert);

export default router;
