
const Mobile = require('../models/mobile-model')

createMobile = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Mobile',
        })
    }

    const mobile = new Mobile(body)

    if (!mobile) {
        return res.status(400).json({ success: false, error: err })
    }

    mobile
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: mobile._id,
                message: 'Mobile created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Mobile not created!',
            })
        })
}

updateMobile = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Mobile.findOne({ _id: req.params.id }, (err, mobile) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Mobile not found!',
            })
        }
        mobile.name = body.name
        mobile.brand = body.brand
        mobile.rating = body.rating
        mobile.price = body.time
        mobile.image_url = body.image_url
        mobile.description = body.description
        
        mobile
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: mobile._id,
                    message: 'Mobile updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Mobile not updated!',
                })
            })
    })
}

deleteMobile = async (req, res) => {
    await Mobile.findOneAndDelete({ _id: req.params.id }, (err, mobile) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!mobile) {
            return res
                .status(404)
                .json({ success: false, error: `Mobile not found` })
        }

        return res.status(200).json({ success: true, data: mobile })
    }).catch(err => console.log(err))
}

getMobileById = async (req, res) => {
    await Mobile.findOne({ _id: req.params.id }, (err, mobile) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!mobile) {
            return res
                .status(404)
                .json({ success: false, error: `Mobile not found` })
        }
        return res.status(200).json({ success: true, data: mobile })
    }).catch(err => console.log(err))
}

getMobiles = async (req, res) => {
    await Mobile.find({}, (err, mobile) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!mobile.length) {
            return res
                .status(404)
                .json({ success: false, error: `Mobile not found` })
        }
        return res.status(200).json({ success: true, data: mobile })
    }).catch(err => console.log(err))
}

module.exports = {
    createMobile,
    updateMobile,
    deleteMobile,
    getMobiles,
    getMobileById,
}