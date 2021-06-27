const { create, find, findOne, remove, updateOne } = require("../services/project");
module.exports = {
  create({ body }, res) {
    create(body)
      .then((result) => {
        res.status(201).send({
          state: true,
          message: "le projet a été crée avec succès",
          data: result,
        });
      })
      .catch((error) => {
        res.status(500).send({
          state: false,
          message: `il y a eu une erreur lors de la creation du project : ${error} `,
        });
      });
  },
  list({ params: { limit } }, res) {
    find(limit ?? null)
      .then((result) => {
        res.status(200).send({
          state: true,
          message: "vous avez récuperé tous les datas",
          data: result,
        });
      })
      .catch((error) => {
        res.status(500).send({
          state: false,
          message: `il y a eu une erreur lors de la creation du project : ${error} `,
        });
      });
  },
  getById({ params: { id } }, res) {
    findOne(id)
      .then((result) => {
        res.status(200).send({
          state: true,
          message: "le projet a été crée avec succès",
          data: result,
        });
      })
      .catch((error) => {
        res.status(404).send({
          state: false,
          message: `il y a eu une erreur lors de la recuperation du project : ${error} `,
        });
      });
  },
  remove({ params: { id } }, res) {
    remove(id)
      .then((result) => {
        res.status(200).send({
          state: true,
          message: "le projet a été supprimée avec succès",
          data: result,
        });
      })
      .catch((error) => {
        res.status(404).send({
          state: false,
          message: `il y a eu une erreur lors de la suppression du project : ${error} `,
        });
      });
  },
  updateById({ body, params: { id } }, res){
    updateOne(body, id)
      .then((result) => {
        res.status(200).send({
          state: true,
          message: "le projet a été mis à jour avec succès",
          data: result
      })
      }).catch((err) => {
        res.status(500).send({
          state: false,
          message: `il y a eu une erreur lors de la modification du projet : ${err}`
          
      })
    })
  }
};

