const {createAUser,getUser, getAllUser,login,signUp} =require ('../controller/usercjontoller.js')
const router=require('express').Router()
router.get('/',getAllUser)
router.post('/add',createAUser)
.get("/:email", getUser);
router.post('/login',login)
router.post('/signup',signUp)

module.exports = router