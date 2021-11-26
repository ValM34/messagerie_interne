var express = require('express');
var router = express.Router();
const db = require('../sequelize');
const publicationCtrl = require("../controllers/publications");
const auth = require("../middleware/auth");

router.post('/addpublication', auth, publicationCtrl.addPublication);
router.post('/delpublication', auth, publicationCtrl.delPublication);
router.get('/getpublications', auth, publicationCtrl.getPublications);
router.get('/getmypublications', auth, publicationCtrl.getMyPublications);
router.post('/setpublication', auth, publicationCtrl.setPublication);

router.post('/likepublication', publicationCtrl.likePublication); // --------------------- Pas fini-----------------------

module.exports = router;