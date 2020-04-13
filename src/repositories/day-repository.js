
const Day = require('../models/Day');
const Group = require('../models/Group');
const Exercise = require('../models/Exercise');

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
                include:[{
                   
                    association: 'exercises'
                }
                ],
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



