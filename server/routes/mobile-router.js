const express = require('express')

// const MovieCtrl = require('../controllers/movie-ctrl')
const MobileCtrl = require('../controllers/mobile-ctrl')
const router = express.Router()
// router.post('/movie', MovieCtrl.createMovie)
// router.put('/movie/:id', MovieCtrl.updateMovie)
// router.delete('/movie/:id', MovieCtrl.deleteMovie)
// router.get('/movie/:id', MovieCtrl.getMovieById)
// router.get('/movies', MovieCtrl.getMovies)

router.post('/mobile', MobileCtrl.createMobile)
router.put('/mobile/:id', MobileCtrl.updateMobile)
router.delete('/mobile/:id', MobileCtrl.deleteMobile)
router.get('/mobile/:id', MobileCtrl.getMobileById)
router.get('/mobile', MobileCtrl.getMobiles)
router.post('/mobile', MobileCtrl.createMobileCart)

module.exports = router