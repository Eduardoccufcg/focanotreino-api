
const Group = require('../models/Group');

exports.get = async () => {
    return await Group.findAll();
}

exports.getById = async (id) => {
    return await Group.findByPk(id);
}

exports.delete = async (group) => {
    await group.destroy();
}

exports.post = async (group,day_id) =>{
    const {name} = group;

    return Group.create({
        name: name,
        day_id:day_id
    })
}




