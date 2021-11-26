var express = require('express');
var router = express.Router();
const db = require('../sequelize');
const answerCtrl = require("../controllers/answers");
const auth = require("../middleware/auth");

// La table "commentresponses" va contenir les réponses aux commentaires que les utilisateurs font sur les publications
// Question : Est-ce que on a besoin de l'id de la publication si on a l'id du commentaire ?

router.get('/getallanswers', auth, answerCtrl.getAllAnswers);
router.post('/addanswer', auth, answerCtrl.addAnswer);
router.post('/setanswer', auth, answerCtrl.setAnswer);
router.post('/delanswer', auth, answerCtrl.delAnswer);

module.exports = router;