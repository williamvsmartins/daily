const Account = require('../../models/account-model')
const jwt = require('jsonwebtoken')
const hash = process.env.SECRET_HASH


module.exports.findByAccount = async(req, res) => {
  function generateToken(params = {}) {
    return jwt.sign(params, hash, {
      expiresIn: 3600 //1h
    })
  }

  const { email, name, picture } = req.body


  let userToCreate = {
    value: 200,
    owner: name,
    email: email,
    picture: picture,
    admin: req.body.admin ? req.body.admin : false
  }

  try {

    const userData = await Account.find({ email: `${userToCreate.email}`})

    if(userData.length == 0) {
      userData = await Account.create(userToCreate)
    }

    return res.status(201).json({
      token: generateToken({
        id: userData[0]._id,
        admin: userData[0].admin
      }),
      user: {
        id: userData[0]._id,
        owner: userData[0].owner,
        value: userData[0].value,
        picture: userData[0].picture,
      }
    })
  } catch(err) {
    console.log(err)
    return res.status(500).json({ msg: 'Algum erro de comunicação no processo de criação de conta ocorreu. Tente novamente!'})
  }
    
}