const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RaffleSchema =  new Schema({
    raffle: {
        type: Number,
        required: true,
        unique: true
    },
    owner: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    value: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    },
    participants: {
        type: Array,
        required: true
    }
},
{
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
}

)

module.exports = mongoose.model('Raffle', RaffleSchema)