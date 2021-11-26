const express = require('express');
const db = require('../sequelize');
const router = express.Router();
const jwt = require('jsonwebtoken');
const frontChannels = require("../socket/Socket");

exports.sendMessage = async (req, res, next) => {
  const message = req.body.message;
  const idDest = req.body.idDest;

  if (!message || !idDest) {
    return res.send("WRONG PARAMETERS");
  }

  const addMessage = await db.messages.create({
    message,
    idExp: req.userId,
    idDst: req.body.idDst,
  });

  //Envoyer le message au destinataire
  if (frontChannels["20"]) {
    frontChannels["20"].emit("message", message);
  }

  // Renvoyer la réponse HTTP à l'expéditeur
  res.send({
    "message": "MESSAGE SENT"
  });
};

exports.getMyMessages = async (req, res, next) => {
  req.userId

  db.messages.find({});

};

exports.delMessage = async (req, res, next) => {
    // Le front envoie l'id du message à supprimer
}


exports.setMessage = async (req, res, next) => {
  // Le front envoie l'id du message à modifier et le contenu du nouveau message 


  // Attention : Vérifier dans messages si idExp = req.userId
}