const express = require('express');
const router = express.Router();
const authctrl = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware')
router.post('/register',authctrl.register);
router.post('/login',authctrl.login);
router.get('/dashboard',authMiddleware,authctrl.dashboard);
module.exports = router;
