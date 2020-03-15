
const {DataTypes,Model} = require('sequelize') 


class Day extends Model{
	static init(sequelize){
		super.init({
			description: {
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
module.exports = Day;