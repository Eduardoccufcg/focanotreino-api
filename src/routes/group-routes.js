'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/group-controller');

router.post('/:day_id', controller.post);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.delete('/:id', controller.deleteById);
router.delete('/:day_id/:group_id', controller.deleteByDay);

module.exports = router;