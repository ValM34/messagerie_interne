const express = require('express');
const db = require('../sequelize');
const router = express.Router();
const jwt = require('jsonwebtoken');

exports.addPublication = async (req, res, next) => {
  const publication = req.body.publication;

  if (!publication) {
    return res.send("EMPTY PUBLICATION");
  }

  // Récupérer le idOwner à partir du jwt
  console.log("USER ID =============================================== " + req.userId);


  const addPublication = await db.publications.create({
    publication,
    idOwner: req.userId,
    likes: 0,
  });

  res.send({
    "message": "PUBLICATION ADDED"
  });
};

exports.delPublication = async (req, res, next) => {

  const idPublication = req.body.idPublication;

  if (!idPublication) {
    return res.send("EMPTY ID PUBLICATION");
  }

  const idPub = Number(idPublication);

  const ownerPublication = await db.publications.findOne({
    where: { idOwner: req.userId, idPublication: idPub }
  })

  if (!ownerPublication) {
    return res.send("NOT AUTHORIZED");
  }

  const result = await db.publications.destroy({
    where: { idPublication: idPub }
  });

  res.send("SUCCESS DELETION");
};

exports.getPublications = async (req, res, next) => {
  const allPublications = await db.publications.findAll();
  if (!allPublications) {

  }
  console.log(allPublications);
  res.send(allPublications);
};

exports.getMyPublications = async (req, res, next) => {
  let idOwner = req.userId;
  console.log(idOwner);
  const myPublications = await db.publications.findAll({
    where : { idOwner: idOwner }
  });
  res.send(myPublications);
};

exports.setPublication = async (req, res, next) => {
  let idPublication = req.body.idPublication;
  let publication = req.body.publication;
  if(!publication){
    return res.send('EMPTY PUBLICATION');
  };
  const publicationIdOwner = await db.publications.findOne({
    where : { idPublication: idPublication, idOwner: req.userId }
  });
  if(!publicationIdOwner){
    return res.send("NOT AUTHORIZED");
  }
  const setPublication = await db.publications.update(
    {publication: publication},
    {where: { idPublication: idPublication, idOwner: req.userId}
  });
  res.send("set publications");
};

exports.likePublication = async (req, res, next) => {
  let idPublication = req.body.idPublication;
  let likePublication = req.body.likePublication; // Réfléchir à comment gérer les modifications de like. Comment vérifier si un utilisateur a déjà liké un post? résultat attendu: 1 utilisateur like --> +1 like, il reclique --> -1 like. Un autre utilisateur like --> +1 like.
  const setPublication = await db.publications.update(
    {publication: publication},
    {where: { idPublication: idPublication}
  });

  res.send("like publications");
};