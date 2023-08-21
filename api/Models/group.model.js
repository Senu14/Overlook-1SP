import sequelize from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'
import bcrypt from 'bcrypt'

class Groups extends Model{}

Groups.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	is_active: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
}, {
	sequelize,
	modelName: 'group',
	underscored: true
})

export default Groups