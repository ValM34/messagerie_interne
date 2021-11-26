const express = require('express');
const db = require('../sequelize');
const router = express.Router();
const jwt = require('jsonwebtoken');

exports.addAnswer = async (req, res, next) => {// Vérifier que le comment existe et vérifier que la publication existe.
  const answer = req.body.answer;
  if (!answer) {
    return res.send("EMPTY ANSWER");
  }
  const verifyPublicationAndComment = await db.comment.findOne({
    where : { idPublication: req.body.idPublication, idComment: req.body.idComment }
  });

  if(!verifyPublicationAndComment){
    return res.send('NOT AUTHORIZED');
  };
  // Récupérer le idOwner à partir du jwt
  const addAnswer = await db.commentresponses.create({
    idPublication: req.body.idPublication,
    idComment: req.body.idComment,
    response: req.body.answer,
    idOwner: req.userId,
    // likes: 0,  Il n'y a pas de like dans la table
  });

  res.send({
    "message": "ANSWER ADDED"
  });
};

exports.delAnswer = async (req, res, next) => {
  
  const idAnswer = req.body.idAnswer;
  console.log(idAnswer);
  if (!idAnswer) {
    return res.send("EMPTY ID ANSWER");
  }

  const idAns = Number(idAnswer);
  console.log(idAns);
  const ownerAnswer = await db.commentresponses.findOne({
    where: { idOwner: req.userId, idResponse: idAns }
  });

  if (!ownerAnswer) {
    return res.send("NOT AUTHORIZED");
  }

  const result = await db.commentresponses.destroy({
    where: { idResponse: idAns }
  });

  res.send("delete answer");
};

exports.getAllAnswers = async (req, res, next) => {
  console.log(req.body.idComment);
  const allAnswers = await db.commentresponses.findAll({
    where: { idComment: req.body.idComment }// On demande toutes les réponses d'un commentaire, c'est donc une requête post
  });
  console.log(allAnswers);
  res.send(allAnswers);
};


exports.setAnswer = async (req, res, next) => {
  let idAnswer = req.body.idAnswer;
  let answer = req.body.answer;
  if(!answer){
    return res.send('EMPTY ANSWER');
  };
  // Il faut vérifier si l'utilisateur a bien créé le commentaire qu'il souhaite modifier
  const answerIdOwner = await db.commentresponses.findOne({
    where : { idResponse: idAnswer, idOwner: req.userId }
  });
  if(!answerIdOwner){
    return res.send("NOT AUTHORIZED"); // L'id de la réponse ne correspond pas à l'id de l'utilisateur ou alors le commentaire n'existe pas (il a été supprimé)
  };
  const setAnswer = await db.commentresponses.update(
    {response: answer},
    {where: { idResponse: idAnswer, idOwner: req.userId}
  });
  res.send("set answer");
};
