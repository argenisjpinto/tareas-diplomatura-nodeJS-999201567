# Módulo 1 — Unidad 1

## 📌 Tarea 1: Introducción a Node.js

---

# 📖 Descripción

Este proyecto fue desarrollado como parte del **Módulo 1 — Unidad 1**
del curso **Desarrollo con Node.js**.

El objetivo de la actividad fue:

- Ejecutar JavaScript fuera del navegador
- Utilizar módulos nativos de Node.js
- Crear y utilizar módulos propios

La aplicación permite:

- Mostrar un mensaje de presentación en consola
- Obtener información del sistema utilizando el módulo `os`
- Importar y ejecutar un módulo propio

---

# 🚀 Tecnologías utilizadas

- Node.js
- JavaScript (CommonJS)
- Módulo nativo `os`

---

# 🗂️ Estructura del proyecto

    modulo-1-tarea-1/
    │
    ├── app.js
    ├── mensaje.js
    └── README.md

---

# 🧠 Conceptos aplicados

### Ejecución con Node.js

Se ejecuta el script mediante:

    node app.js

---

### Módulos nativos

Uso del módulo `os` para obtener información del sistema:

- Sistema operativo
- Memoria libre y total
- CPUs
- Tiempo activo
- Usuario
- Directorio actual

---

### Módulos propios

Se crea un módulo personalizado (`mensaje.js`) que exporta una función:

    module.exports = mostrarMensaje;

Y se importa en `app.js` mediante:

    const mostrarMensaje = require('./mensaje');

---

# 🖥️ Ejemplo de salida

--- Saludo inicial ---
Saludos profe, Soy Argenis Pinto.
Estoy aprendiendo backend para mejorar mis habilidades de developer y poder crecer más como QA Automation Engineer

--- Información del sistema ---
Sistema operativo: win32
Memoria libre: 1004158976
Memoria total: 8463200256
Número de CPUs: 8
Tiempo de actividad (segundos): 10821.39
Usuario actual: argen
Directorio actual: C:\Users\argen\OneDrive\Desktop\diplomatura-fullstack\nodeJS-999201567\tareas-diplomatura-nodeJS-999201567\modulo-1-tarea-1
Versión de Node.js: v24.14.1

--- Mensaje personalizado ---
Este es un mensaje para la primera tarea de Node.js

--- Fin del contenido de la tarea ---

---

# ⚙️ Instalación y ejecución

## 1️⃣ Clonar el repositorio

    git clone https://github.com/argenisjpinto/tareas-diplomatura-nodeJS-999201567.git

## 2️⃣ Ejecutar el proyecto

    node app.js

---

# 👨‍🎓 Autor

Argenis Pinto  
Curso: Desarrollo con Node.js  
Módulo 1 — Unidad 1  
Centro de e-Learning UTN BA

---

# 📚 Bibliografía

Node.js Documentation  
https://nodejs.org/en/docs

Material del curso UTN — Centro de e-Learning