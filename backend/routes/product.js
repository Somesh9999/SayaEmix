const express= require('express');
const router = express.Router();
const productController= require('../controllers/product');
const extractFile= require('../middlewares/extractfile');

router.post("/addProduct",extractFile,productController.addProduct);
router.post("/compressVideo",extractFile,productController.compressVideo);

module.exports=router;
