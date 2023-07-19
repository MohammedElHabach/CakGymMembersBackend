const express = require('express')
const router = express.Router()
const {getMembers,createMember,deleteMember,updateMember } = require("../controllers/memberController")
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect,getMembers).post(protect,createMember)
router.route('/:id').put(protect,updateMember).delete(protect,deleteMember)


module.exports = router
