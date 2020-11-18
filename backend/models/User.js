const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        maxlength: 50
    },
    senha: {
        type: String,
        required: true,
        maxlength: 30,
    },
},
    {
        timestamps: true,
        collection: 'Usuarios',
    });

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();
})


module.exports = mongoose.model('User', UserSchema);