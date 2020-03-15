
const {DataTypes,Model} = require('sequelize') 


class Exercise extends Model{
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
            },
            repeticoes: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true
				}
			}
		},{
			sequelize
		})
	}

}
module.exports = Exercise;