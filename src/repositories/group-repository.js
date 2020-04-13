
const Group = require('../models/Group');

exports.get = async () => {
    return await Group.findAll();
}

exports.getById = async (id) => {
    return await Group.findByPk(id,{
        include:{
            association: 'exercises'
        }
    });
}

exports.delete = async (group) => {
    await group.destroy();
}

exports.post = async (groupAux, day) => {

    const name = groupAux.name;
    const [group] = await Group.findOrCreate({

        where: {
            name
        }
    });
    await group.addDay(day);
    return group;

}

exports.deleteByDay = async (group, day) => {

    await group.removeDay(day);

}