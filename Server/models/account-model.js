const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AccountSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        default: 200,
        required: true,
        trim: true
    },

    admin: {
        type: String,
        default: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
        required: true,
    }
},
{
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
}
)

module.exports = mongoose.model('Account', AccountSchema)


