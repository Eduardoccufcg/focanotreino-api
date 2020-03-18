'use strict';

const repository = require("../repositories/day-repository");

exports.post = async (req, res, next) => {

    repository.post(req.body).
        then((result) => {

            res.status(201).send(result);

        }).catch((erro) => {
            res.status(500).send("Houve um erro " + erro);
        });

};

exports.get = async (req, res, next) => {

    repository.get().then(days => {
        res.status(200).send(days);
    }).catch(e => {
        res.status(500).send(e);
    });

};

exports.getById = (req, res, next) => {

    repository.getById(req.params.id).then(day => {
        if (day == null) {
            res.status(404).send({ "error": "Dia não existe" });
        } else {
            res.status(200).send(day);
        }

    }).catch(e => {
        res.send(400).send(e);
    })

};

exports.deleteById = (req, res, next) => {
    repository.getById(req.params.id).then(day => {

        if (day == null) {
            res.status(404).send({ "error": "Dia não existe" });
        } else {
            repository.delete(day).then(() => {
                res.status(204).send();
            }).catch(() => {
                res.status(500).send();

            });
        };
        
    })
};