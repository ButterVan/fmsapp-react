const {CowModel } = require('../models');

module.exports = {

    findAll: function(req, res) {
       CowModel
            .find(req.query)
            .then(cowData => res.json(cowData))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
       CowModel
            .findById(req.params.id)
            .then(cowData => res.json(cowData))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
       CowModel
            .create(req.body)
            .then(cowData => res.json(cowData))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
       CowModel
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(cowData => res.json(cowData))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
       CowModel
            .findById({_id: req.params.id})
            .then(cowData => cowData.remove())
            .then(cowData => res.json(cowData))
            .catch(err => res.status(422).json(err));
    },

}