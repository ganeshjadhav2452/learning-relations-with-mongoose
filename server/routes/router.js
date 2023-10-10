const express = require('express')
const router = express.Router();
const staffController = require('../controller/StaffController')
const rightController = require('../controller/RightController')

router.post('/staff/create', staffController.createStaff)
router.post('/right/create', rightController.createRight)
router.post('/get/right', rightController.getRightUser)


module.exports = router;