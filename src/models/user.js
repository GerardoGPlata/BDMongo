// Crear Squema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    fechaContratacion: {
        type: Date,
        default: Date.now
    },
    aportacionMensual: {
        type: Number,
        required: true
    },
    fotoPerfil: {
        type: String,
        required: false
    }
});

module.exports = User = mongoose.model('users', UserSchema);