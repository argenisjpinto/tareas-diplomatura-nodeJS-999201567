const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenidos a la tarea 2 del módulo Node.js de la Diplomatura Fullstack Developer de la UTN.');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

const libros = [
    { id: 1, titulo: 'Rayuela', autor: 'Julio Cortázar' },
    { id: 2, titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez' },
    { id: 3, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' },
    { id: 4, titulo: 'La Metamorfosis', autor: 'Franz Kafka' },
    { id: 5, titulo: '1984', autor: 'George Orwell' }
];

app.get('/libros', (req, res) => {
    res.json(libros);
});

app.get('/libros/:id', (req, res) => {
    const libroId = parseInt(req.params.id);
    const libro = libros.find(b => b.id === libroId);
    if (libro) {
        res.json(libro);
    } else {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});

app.post('/libros', (req, res) => {
    const nuevoLibro = {
        id: libros.length + 1,
        titulo: req.body.titulo,
        autor: req.body.autor
    };
    libros.push(nuevoLibro);
    res.send('Libro agregado correctamente');
    res.status(201).json(nuevoLibro);
});

app.put('/libros/:id', (req, res) => {
    const libroId = parseInt(req.params.id);
    const libro = libros.find(b => b.id === libroId);
    if (libro) {
        libro.titulo = req.body.titulo || libro.titulo;
        libro.autor = req.body.autor || libro.autor;
        res.json(libro);
        res.send('Libro actualizado correctamente');
    } else {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});

app.delete('/libros/:id', (req, res) => {
    const libroId = parseInt(req.params.id);
    const index = libros.findIndex(b => b.id === libroId);
    if (index !== -1) {
        const libroEliminado = libros.splice(index, 1);
        res.json(libroEliminado[0]);
        res.send(`Libro con id ${libroId} eliminado correctamente`);
    } else {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});