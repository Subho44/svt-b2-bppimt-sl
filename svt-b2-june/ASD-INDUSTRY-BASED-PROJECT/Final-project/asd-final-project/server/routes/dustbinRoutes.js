const express = require('express');
const router = express.Router();
const dustbinctrl = require('../controllers/dustbinController');

router.post('/',dustbinctrl.createDustbin);
router.get('/',dustbinctrl.getallDustbin);
router.get('/:id',dustbinctrl.getsingleDustbin);
router.put('/:id',dustbinctrl.updateDustbin);
router.delete('/:id',dustbinctrl.deleteDustbin);

module.exports = router;