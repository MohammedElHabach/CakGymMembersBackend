const express = require('express')
const router = express.Router()
const {registerAdmin,loginAdmin,getAdmin} = require('../controllers/adminController')
const { protect } = require('../middleware/authMiddleware')

router.post('/',registerAdmin)
router.post('/login',loginAdmin)
router.get('/getAdmin',protect,getAdmin)

module.exports = router