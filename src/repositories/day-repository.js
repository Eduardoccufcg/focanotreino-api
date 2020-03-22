
const Day = require('../models/Day');
const Group = require('../models/Group');

exports.get = async () => {
    return await Day.findAll({
        include: [
            {
                model: Group,
                as: 'groups',
                through: { attributes: [] }
            }
        ]
    });
}

exports.getById = async (id) => {
    return await Day.findByPk(id, {
        include: [
            {
                model: Group,
                as: 'groups',
                through: { attributes: [] }
            }
        ]
    });
}

exports.delete = async (day) => {
    await day.destroy();
}

exports.post = async (day) => {
    return Day.create(day)
}



