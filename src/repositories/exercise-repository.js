
const Exercise = require('../models/Exercise');

exports.get = async () => {
    return await Exercise.findAll();
}

exports.getById = async (id) => {
    return await Exercise.findByPk(id);
}

exports.delete = async (exercise) => {
    await exercise.destroy();
}

exports.post = async (exercise,group_id) => {
    const {name,repeticoes} = exercise;

    return Exercise.create({
        name:name,
        repeticoes:repeticoes,
        group_id:group_id
    })
}

