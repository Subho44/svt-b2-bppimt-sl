const express = require('express');
const router = express.Router();
const bookctrl =  require('../controllers/bookingController');

router.post('/book',bookctrl.bookDustbin);
router.post('/verify',bookctrl.verifyPayment);
router.get('/',bookctrl.getAllbookings);

module.exports = router;
