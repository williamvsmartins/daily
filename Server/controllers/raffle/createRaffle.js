const Raffle = require('../../models/raffle-model')


module.exports = async(req, res) => {
    function generateRaffleNumber(){
        let num = ''
        while (num.length < 4) {
            num += Math.floor(Math.random() * 10)
        }

        return num
    }

    const numberCreated = generateRaffleNumber()

    let raffleToCreate = {
        raffle: numberCreated,
        owner: req.body.owner,
        price: req.body.price,
        participants: req.body.participants 
    }

    try {
        const raffleExistsAlready = await Raffle.find({ owner: raffleToCreate.owner })
        if (raffleExistsAlready.length > 0) return res.status(401).json({ msg: "Você já criou uma Rifa"})

        const creation = await Raffle.create(raffleToCreate)

        return res.status(201).json(creation)

    } catch (err) {
        console.log(err)
        return res.status(500).json({ msg: 'Algum erro de comunicação no processo de criação de rinha ocorreu. Tente novamente!'})
    }
}