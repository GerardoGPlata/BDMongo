// requires
const express = require('express');
const UserSchema = require('../models/user');
const router = express.Router();

// Crear un usuario
router.post('/', async (req, res) => {
    const user = new UserSchema({
        nombre: req.body.nombre,
        email: req.body.email,
        edad: req.body.edad,
        aportacionMensual: req.body.aportacionMensual,
        fotoPerfil: req.body.fotoPerfil
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await UserSchema.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

// Obtener un usuario
router.get('/:userId', async (req, res) => {
    try {
        const user = await UserSchema.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

// Eliminar un usuario
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await UserSchema.remove({ _id: req.params.userId });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

// Actualizar un usuario
router.put('/:userId', async (req, res) => {
    try {
        const updatedUser = await UserSchema.updateOne(
            { _id: req.params.userId },
            {
                $set: {
                    nombre: req.body.nombre,
                    email: req.body.email,
                    edad: req.body.edad,
                    aportacionMensual: req.body.aportacionMensual,
                    fotoPerfil: req.body.fotoPerfil
                }
            }
        );
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err });
    }
});
module.exports = router;
