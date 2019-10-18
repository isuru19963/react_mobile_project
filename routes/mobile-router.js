const express = require('express')

const MobileCtrl = require('../controllers/mobile-ctrl')
const router = express.Router()

router.post('/mobile', MobileCtrl.createMobile)
router.put('/mobile/:id', MobileCtrl.updateMobile)
router.delete('/mobile/:id', MobileCtrl.deleteMobile)
router.get('/mobile/:id', MobileCtrl.getMobileById)
router.get('/mobile', MobileCtrl.getMobiles)
router.post('/mobile', MobileCtrl.createMobileCart)

module.exports = router