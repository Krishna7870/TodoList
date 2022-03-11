const express = require('express');
const router = express.Router();

const todoController = require('../controllers/Todo_Controller');
router.get('/', todoController.home);
module.exports = router;