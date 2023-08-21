import sequelize from "../Config/sequelize.config.js";
import { DataTypes, Model } from "sequelize";
import Hotels from "./hotel.model.js";
import Rooms from "./room.model.js";

class HotelRoomRel extends Model{}

HotelRoomRel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	hotel_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: Hotels,
			key: 'id'
		}	
	},
	room_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: Rooms,
			key: 'id'
		}	

	},
	num_rooms: {
		type: DataTypes.INTEGER,
		allowNull: false
	}

}, {
	sequelize,
	modelName: 'hotel_room_rel',
	freezeTableName: true,
	underscored: true,
	timestamps: false
})

export default HotelRoomRel