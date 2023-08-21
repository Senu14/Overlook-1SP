import sequelize from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'
import { Images } from './image.model.js'

class Cities extends Model {

}

Cities.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	slug: {
		type: DataTypes.STRING,
		allowNull: false
	},	
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	country_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	image_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: Images,
			key: 'id'
		}
	}
}, {
	sequelize,
	modelName: 'city',
	underscored: true,
})

export default Cities