
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
		this.hasMany(models.Group,{foreignKey: 'day_id',as:"groups",
		onDelete: 'cascade', hooks: true});
	}
}
module.exports = Day;