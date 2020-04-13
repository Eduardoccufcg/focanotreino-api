'use strict';

const repository = require("../repositories/exercise-repository");
const repositoryGroup = require("../repositories/group-repository");

exports.post = async (req, res, next) => {

    const {group_id} = req.params;
    const group = await repositoryGroup.getById(group_id);
    if(!group){
        res.status(404).json({error: "Grupo não existe"});
    }
    repository.post(req.body,group_id).
        then((result) => {

            res.status(201).json(result);

        }).catch((erro) => {
            res.status(500).json({error: "Houve um erro " + erro});
        });

};

exports.get = async (req, res, next) => {

    repository.get().then(exercises => {
        res.status(200).json(exercises);
    }).catch(e => {
        res.status(500).json(e);
    });

};

exports.getById = (req, res, next) => {

    repository.getById(req.params.id).then(exercise => {
        if (exercise == null) {
            res.status(404).json({ error: "Exercício não existe" });
        } else {
            res.status(200).json(exercise);
        }

    }).catch(e => {
        res.send(400).send(e);
    })

};

exports.deleteById = (req, res, next) => {
    repository.getById(req.params.id).then(exercice => {

        if (exercice == null) {
            res.status(404).json({ error: "Exercício não existe" });
        } else {
            repository.delete(exercice).then(() => {
                res.status(204).send();
            }).catch(() => {
                res.status(500).send();

            });
        };
        
    })
};