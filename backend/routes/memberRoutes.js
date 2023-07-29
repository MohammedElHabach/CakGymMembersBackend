const express = require('express')
const router = express.Router()
const {getMembers,createMember,deleteMember,updateMember, getExpirationDateByPhone, takeAttendance } = require("../controllers/memberController")
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect,getMembers).post(protect,createMember)
router.route('/expDate').post(getExpirationDateByPhone)
// router.route('/attendance').post(protect,takeAttendance)
router.route('/:id').put(protect,updateMember).delete(protect,deleteMember)


module.exports = router
