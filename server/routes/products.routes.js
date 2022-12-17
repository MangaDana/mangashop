const {addProduct, getAllProducts,getOneProduct} =require ('../controller/productscontroller.js')
const router=require('express').Router()


router.get('/',getAllProducts)
router.post('/add',addProduct)
.get("/:name", getOneProduct);


module.exports = router