import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());


const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Conexión a MongoDB establecida');
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error);
    }
}

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false }
}, {
    versionKey: false
});

const Task = mongoose.model('Task', taskSchema);

app.post('/tasks', async (req, res) => {
    const body = req.body;
    await Task.create({ title: body.title, description: body.description });
    res.json({ status: 'Tarea creada' });
});

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json({ status: 'Tareas obtenidas', tasks });
});

app.get('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) return res.status(404).send('Tarea no encontrada');
    res.json(task);
});

app.put('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const update = await Task.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    res.json({ status: 'Tarea actualizada', update });
});

app.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.json({ status: 'Tarea eliminada' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    connectMongoDb();
});