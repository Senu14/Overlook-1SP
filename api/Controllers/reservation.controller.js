import Hotels from '../Models/hotel.model.js'
import Reservations from '../Models/reservation.model.js'
import Rooms from '../Models/room.model.js'
import Users from '../Models/user.model.js'

// Definerer relation mellem reservation og bruger
Users.hasMany(Reservations)
Reservations.belongsTo(Users)

// Definerer relation mellem reservation og hotel
Hotels.hasMany(Reservations)
Reservations.belongsTo(Hotels)

// Definerer relation mellem reservation og værelse
Rooms.hasMany(Reservations)
Reservations.belongsTo(Rooms)

/**
 * Controller for Org Actions
 */
class ReservationController {

	/**
	 * Method List
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	list = async (req, res) => {
		// Destructure Assignment - optional list management
		let { sortkey, sortdir, limit, attributes } = req.query
		// Sætter array til sort og retning
		const order = [sortkey ? sortkey : 'id']
		order.push(sortdir || 'ASC')
		// Sætter limit antal
		limit = parseInt(limit) || 1000
		// Sætter attributter (table felter)
		const attr = attributes ? attributes.split(',') : new Array('id', 'firstname', 'lastname', 'email')

		// Eksekverer sequelize metode med management values
		const result = await Reservations.findAll({
			attributes: attr,
			order: [order],
			limit: limit
		})
		// Udskriver resultat i json format
		res.json(result)
	}

	/**
	 * Method Details
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	details = async (req, res) => {
		// Destructure assignment af id. 
		const { id } = req.params || 0
		// Eksekverer sequelize metode med attributter og where clause
		const result = await Orgs.findOne({
			attributes: [
				'id', 
				'is_flex', 
				'num_persons', 
				'checkin', 
				'checkout', 
				'firstname', 
				'lastname', 
				'email',
				'phone',
				'comment'
			],
			include: [
				{
					model: Hotels,
					attributes: ['id','title']
				},
				{
					model: Rooms,
					attributes: ['id','title']
				}
			],
			where: { id: id }
		})
		// Udskriver resultat i json format
		res.json(result)
	}

	/**
	 * Method Details
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	create = async (req, res) => {
		// Destructure assignment af form data fra request body
		const { user_id, hotel_id, room_id, is_flex, checkin, checkout, firstname, lastname, email } = req.body;
		// Tjekker felt data
		if(user_id && hotel_id && room_id && is_flex, checkin, checkout, firstname, lastname, email) {
			// Opretter record
			const model = await Reservations.create(req.body)
			// Sender nyt id som json object
			res.json({ newId: model.id })
		} else {
			res.sendStatus(418)
		}
	}

	/**
	 * Method Update
	 * @param {*} req 
	 * @param {*} res 
	 */
	update = async (req, res) => {
		// Destructure assignment af id. 
		const { id } = req.params || 0
		// Destructure assignment af form data fra request body
		const { name, address, zipcode, city, country } = req.body;
		// Tjekker felt data
		if(id && name && address && zipcode && city) {
			// Opretter record
			const model = await Orgs.update(req.body, {
				where: { id: id },
				individualHooks: true
			})
			// Sender nyt id som json object
			res.json({ 
				msg: 'Record update' 
			})
		} else {
			res.sendStatus(418)
		}	
	}

	/**
	 * Method Remove
	 * @param {object} req Request Object
	 * @param {object} res Response Object
	 */	
	remove = async (req, res) => {
		const { id } = req.body

		try {
			await Reservations.destroy({ 
				where: { id: id }
			})
			res.sendStatus(200)
		}
		catch(err) {
			res.send(err)
		}
	}		
}

export default ReservationController