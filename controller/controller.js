const model = require("../models/models");

exports.create = (req, res) => {
  const Data = new model({
    name: req.body.name,
    surName: req.body.surName,
  });

  Data.save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.findAll = (req, res) => {
  model
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.findOne = (req, res) => {
  model
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.id,
      });
    });
};

exports.update = (req, res) => {
  model
    .findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        surName: req.body.surName,
      },
      { new: true }
    )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      res.send(error);
    });
};

exports.delete = (req, res) => {
  model
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      res.send({ message: "Message deletes successfuly" });
    })
    .catch((error) => {
      res.send(error);
    });
};
