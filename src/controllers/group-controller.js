'use strict';

const repository = require("../repositories/group-repository");
const dayRepository = require("../repositories/day-repository");

exports.post = async (req, res, next) => {

    const { day_id } = req.params;
    const day = await dayRepository.getById(day_id);

    if (!day) {
        res.status(404).json({ error: "Dia não existe" });
    } else {
        repository.post(req.body, day_id).
            then((result) => {

                res.status(201).send(result);

            }).catch((erro) => {
                res.status(500).send("Houve um erro " + erro);
            });
    }
};

exports.get = async (req, res, next) => {

    repository.get().then(groups => {
        res.status(200).send(groups);
    }).catch(e => {
        res.status(500).send(e);
    });

};

exports.getById = (req, res, next) => {

    repository.getById(req.params.id).then(group => {
        if (group == null) {
            res.status(404).json({ error: "Grupo não existe" });
        } else {
            res.status(200).send(group);
        }

    }).catch(e => {
        res.send(400).send(e);
    })

};

exports.deleteById = (req, res, next) => {
    repository.getById(req.params.id).then(group => {

        if (group == null) {
            res.status(404).json({ error: "Grupo não existe" });
        } else {
            repository.delete(group).then(() => {
                res.status(204).send();
            }).catch(() => {
                res.status(500).send();

            });
        };

    })
};
exports.deleteByDay = async (req, res, next) => {
    const { day_id, group_id } = req.params;
    const group = await repository.getById(group_id);
    const day = await dayRepository.getById(day_id);
    if (group == null) {
        res.status(404).json({ error: "Grupo não existe" });
    }
    else if (day == null) {
        res.status(404).json({ error: "Dia não existe" });
    } else {
        repository.deleteByDay(group, day).then(() => {
            res.status(204).send();
        }).catch(() => {
            res.status(500).send();
        }

        );
    }
};
