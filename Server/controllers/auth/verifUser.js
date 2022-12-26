const jwt = require('jsonwebtoken')
const Account = require('../../models/account-model')
const hash = process.env.SECRET_HASH


module.exports.findByUser = async(req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']

    if(!token) return res.status(401).json({ msg: 'Please, set on header request your token access acquired on / auth route' })

    if(token.startsWith('Bearer')) {
        token = token.slice(7, token.length)
    }

    async function getUser(accountId){
        try {
            const user = await Account.findOne({ _id: accountId})
            return res.status(200).json({
                user: {
                    id: user._id,
                    owner: user.owner,
                    value: user.value,
                    picture: user.picture
                }
            })
        } catch (err) {
            return res.status(500).send(err)
        }
    }

    jwt.verify(token, hash, (err, decoded) => {
        if(err) {
            return res.status(403).json({
                success: false,
                message: 'Invalid token.'
            })
        } else {
            req.decoded = decoded
            const accountId = req.decoded.id
            getUser(accountId)
           
        }
    })
}