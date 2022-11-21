// routes/profile.js
const express = require("express");
const router = express.Router();
const multer = require('multer');

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
        cb(new Error('Please upload an image.'))
        }
        cb(undefined, true)
    }
})

const {
    getAllProfile,
    postCreateProfile,
    putUpdateProfile,
    deleteProfile,
    addTwoNumber,
} = require("../controllers/profile");

/**
 * @route GET api/profile
 * @description get all profile
 * @access public
 */
router.get("/", getAllProfile);

router.post("/addNumber",addTwoNumber);
/**
 * @route POST api/profile
 * @description add a new profile
 * @access public
 */
router.post("/", postCreateProfile);

router.post('/upload', upload.single('upload'), (req, res) => {
    res.json({message: "Success"});
    }, (error, req, res, next) => {
    res.json(error);
})
/**
 * @route PUT api/profile/:id
 * @description update profile
 * @access public
 */
router.put("/:id", putUpdateProfile);

/**
 * @route DELETE api/profile/:id
 * @description delete profile
 * @access public
 */
router.delete("/:id", deleteProfile);

module.exports = router;