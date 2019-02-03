module.exports = {
    getHouses: (req, res, next) => {
        const db = req.app.get('db')

        db.get_houses()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err))
    },

    addHouse: (req, res, next) => {
        const db = req.app.get('db')
        const { name, address, city, state, zipcode } = req.body
        db.add_house([name, address, city, state, zipcode])
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err))
    },

    deleteHouse: (req, res, next) => {
        const db = req.app.get('db')

        db.delete_house(req.params.id)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err))
    },

    updateHouse: (req, res, next) => {
        const db = req.app.get('db')
    }
}
