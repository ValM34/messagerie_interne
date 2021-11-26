var express = require('express');
var router = express.Router();
const db = require('../sequelize');
const messageCtrl = require("../controllers/messages");
const auth = require("../middleware/auth");


router.post('/sendmessage', auth, messageCtrl.sendMessage);
router.post('/getmymessages', auth, messageCtrl.getMyMessages);



module.exports = router;