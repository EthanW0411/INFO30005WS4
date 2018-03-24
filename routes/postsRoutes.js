const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController');

router.get('/', controller.homePage);

router.get('/bye', controller.sayGoodbye);

router.get('/users', controller.fetchUsers);

router.get('/users/:id', controller.fetchUsersById);

module.exports = router;