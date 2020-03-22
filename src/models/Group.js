
const { DataTypes, Model } = require('sequelize')

class Group extends Model {
	static init(sequelize) {
		super.init({
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true,

				},
				unique:true
			}
		}, {
			sequelize,
			tableName: 'groups'
		});

	}
	static associate(models) {
		this.belongsToMany(models.Day, { foreignKey: 'group_id', through: 'day_group', as: 'days' })
		this.hasMany(models.Exercise, { foreignKey: 'group_id', as: "exercises", onDelete: 'cascade', hooks: true });
	}

}
module.exports = Group;