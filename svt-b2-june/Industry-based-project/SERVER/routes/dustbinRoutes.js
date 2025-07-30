const express = require('express');
const router = express.Router();
const {
    getallDustbin,
    createDustbin,
    updateDustbin,
    deleteDustbin
} = require('../controllers/dustbinController');
const multer = require('multer');
const path = require('path');

//image upload
const storage = multer.diskStorage({
    destination:function(req,file,cb) {
        cb(null,'uploads/');
    },
    filename:function(req,file,cb) {
        cb(null,Date.now()+ path.extname(file.originalname));
    },
});
const upload = multer({storage:storage});
router.get('/', getallDustbin);
router.post('/',upload.single('image') ,createDustbin);
router.put('/:id', upload.single('image'), updateDustbin);
router.delete('/:id',deleteDustbin);

module.exports = router;