
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
				}
			}
		},{
			sequelize,
			tableName: 'groups'
		});
		
	}
	static associate(models){
		this.belongsTo(models.Day,{foreignKey: 'day_id'})
		this.hasMany(models.Exercise,{onDelete: 'cascade', hooks: true});
	}

}
module.exports = Group;