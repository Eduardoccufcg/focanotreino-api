
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


    return Exercise.create(exercise)
}

