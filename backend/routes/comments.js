var express = require('express');
var router = express.Router();
const db = require('../sequelize');
const commentCtrl = require("../controllers/comments");
const auth = require("../middleware/auth");

router.post('/getcomments', auth, commentCtrl.getComments);
router.post('/addcomment', auth, commentCtrl.addComment);
router.post('/setcomment', auth, commentCtrl.setComment);
router.post('/delcomment', auth, commentCtrl.delComment);

module.exports = router;