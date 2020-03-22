
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
			sequelize,
			tableName: 'days'
		})
	}
	static associate(models){
		this.belongsToMany(models.Group, { foreignKey: 'day_id' , through:'day_group',as:'groups'})
	}
}
module.exports = Day;