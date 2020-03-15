
const {DataTypes,Model} = require('sequelize') 


class Group extends Model{
	static init(sequelize){
		super.init({
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true
				},
				unique:true
			}
		},{
			sequelize
		})
	}

}
module.exports = Group;