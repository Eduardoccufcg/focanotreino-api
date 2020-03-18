'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/exercise-controller');

router.post('/:group_id', controller.post);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.delete('/:id', controller.deleteById);

module.exports = router;