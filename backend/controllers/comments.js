const express = require('express');
const db = require('../sequelize');
const router = express.Router();
const jwt = require('jsonwebtoken');

exports.addComment = async (req, res, next) => {// Vérifier que la publication existe
  const comment = req.body.comment;

  if (!comment) {
    return res.send("EMPTY COMMENT");
  }

  const verifyPublication = await db.publications.findOne({
    where : { idPublication: req.body.idPublication }
  });

  if(!verifyPublication){
    return res.send('NOT AUTHORIZED');
  };

  // Récupérer le idOwner à partir du jwt
  console.log("USER ID =============================================== " + req.userId);
  console.log(req.body.idPublication);


  const addComment = await db.comment.create({
    idPublication: req.body.idPublication,
    comment,
    idOwner: req.userId,
    // likes: 0,  Il n'y a pas de like dans la table
  });

  res.send({
    "message": "COMMENT ADDED"
  });
};

exports.delComment = async (req, res, next) => {
  
  const idComment = req.body.idComment;
  console.log(idComment);
  if (!idComment) {
    return res.send("EMPTY ID COMMENT");
  }

  const idCom = Number(idComment);
  console.log(idCom);
  const ownerComment = await db.comment.findOne({
    where: { idOwner: req.userId, idComment: idCom }
  });

  if (!ownerComment) {
    return res.send("NOT AUTHORIZED");
  }

  const result = await db.comment.destroy({
    where: { idComment: idCom }
  });

  res.send("delete comment");
};

exports.getComments = async (req, res, next) => {
  console.log(req.body.idPublication);
  const allComments = await db.comment.findAll({
    where: { idPublication: req.body.idPublication }// On demande tous les commentaires d'une publication, c'est donc une requête post
  });
  console.log(allComments);
  res.send(allComments);
};

exports.setComment = async (req, res, next) => {
  let idComment = req.body.idComment;
  let comment = req.body.comment;
  if(!comment){
    return res.send('EMPTY COMMENT');
  };
  // Il faut vérifier si l'utilisateur a bien créé le commentaire qu'il souhaite modifier
  const commentIdOwner = await db.comment.findOne({
    where : { idComment: idComment, idOwner: req.userId }
  });
  if(!commentIdOwner){
    return res.send("NOT AUTHORIZED"); // L'id du commentaire ne correspond pas à l'id de l'utilisateur ou alors le commentaire n'existe pas (il a été supprimé)
  };
  const setComment = await db.comment.update(
    {comment: comment},
    {where: { idComment: idComment, idOwner: req.userId}
  });
  res.send("set comment");
};