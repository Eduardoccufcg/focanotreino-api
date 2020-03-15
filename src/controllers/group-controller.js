'use strict';

const Group = require('../models/Group');
const {Op} = require('sequelize');

exports.post = async (req, res, next) => {
    console.log(req.body)

    await Group.create(req.body).
    
    then((result) => {
        
        res.status(201).send(result);

    }).catch((erro) => {
        res.status(500).send("Houve um erro " + erro);
    });
	
};

exports.get = async (req, res, next) => {

    const groups = await Group.findAll();
    res.status(200).send(groups);
};

exports.getById = async (req, res, next) => {

    const id = req.params.id;
    const profile = await Profile.findByPk(id);
    res.status(200).send(profile);
};

// exports.searchBySubstring = async (req, res, next) => {

   
//     const substring = req.query.substring; 
    
//     const profiles = await Profile.findAll({
//         where:{
//             name:{
//                 [Op.substring]: substring
//             }
//         },
//         attributes: ['id', 'name']
//     });
//     res.status(200).send(profiles);
// };

exports.deleteById = async (req, res, next) => {

    const id = req.params.id;
    const group = await Group.findByPk(id);
    if(group == null){
        res.status(404).send({"error": "Grupo não existe"});
    }else{
        group.destroy().then(()=>{
            res.status(204).send();
        }).catch(()=>{
            res.status(500).send();
    
        });
    };
};