const express = require('express');
const router = express.Router();
const Task = require('../model/task');
const controller = require('../controllers/controller.js');
const middleware = require('../middleware/middleware.js');



router.get('/', middleware.logReadRequest, controller.getAllTasks);
 router.get('/:id', middleware.logFindRequest, controller.findTask);
 
module.exports = router;