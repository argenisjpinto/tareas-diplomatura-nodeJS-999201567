import { User } from '../models/user.model.js';

const getUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

const addUser = async (req, res) => {
    try {
        const body = req.body;

        if (!body.name || !body.email) {
            return res.status(400).json({ error: 'Nombre y email son obligatorios' });
        }

        const newUser = await User.create({
            name: body.name,
            email: body.email
        });

        res.status(201).json({
            respuesta: 'Usuario creado correctamente',
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (!body.name || !body.email) {
            return res.status(400).json({ error: 'Nombre y email son obligatorios' });
        }

        const user = await User.findByIdAndUpdate(
            id,
            { name: body.name, email: body.email },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({
            respuesta: `Usuario con ID ${id} actualizado correctamente`,
            user
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({ respuesta: `Usuario con ID ${id} eliminado correctamente` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};

export { getUsers, addUser, deleteUser, updateUser };