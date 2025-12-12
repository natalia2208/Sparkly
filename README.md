#  Sparkly – Tienda de Accesorios  
Proyecto desarrollado en React + Vite, conectado a MockAPI y diseñado para ofrecer una experiencia moderna, rápida y responsiva para la compra de accesorios.

---

##  Descripción General del Proyecto

Sparkly es una aplicación web enfocada en la visualización, gestión y compra de accesorios.  
Incluye sistema de autenticación, manejo de usuarios, consumo de API externa, navegación completa, formularios validados y un diseño atractivo orientado a la experiencia del usuario.

Este documento resume **las características principales de la plataforma** y **el trabajo realizado por cada integrante del equipo**.

---

#  Equipo de Desarrollo y Aportes

---

##  1️ Karen – Header, búsqueda y diseño general

Karen fue la encargada de estructurar la parte visual principal de la aplicación:

###  Header funcional
Implementó la barra de navegación con enlaces a:
- **Home**
- **Accesorios**
- **Carrito**
- **Login**

Cada enlace tiene funcionalidad y navegación correcta gracias al trabajo conjunto con sus compañeros.

###  Barra de búsqueda
dejó implementada la estructura y lógica para manejar:
- Estado de *cargando*
- Estado de *error*
- Estado de *sin resultados*

###  Diseño general
Definió parte importante del estilo visual del proyecto:
- Tipografía y colores base
- Distribución general
- Diseño limpio y orientado al usuario

###  README principal
Creó la estructura inicial del README, documentando:
- Tecnologías usadas  
- Instalación y uso  
- Estructura del proyecto  

###  Carrito de compras (parte visual)
Colaboró junto a Yeferson:
- Karen → diseño visual del carrito  
- Yeferson → lógica funcional  

---

##  2️ Yeferson – Conexión con MockAPI, tarjetas y carrito

Yeferson se encargó del manejo de datos externos y varias funciones clave del sistema.

###  API externa (MockAPI)
Desarrolló **accessoriesApi.js**, que contiene las funciones para consultar y enviar información.

Incluye:
- `getAccessories()` para obtener todos los accesorios
- Pruebas con datos reales:  
  nombre, precio, categoría, marca, descripción, imagen

###  Diseño de tarjetas
Implementó las tarjetas donde se muestran los accesorios:
- Imagen del producto  
- Nombre  
- Precio  
- Categoría  
- Marca  

Mejoró la presentación usando CSS y estructura responsiva.

###  Carrito (lógica funcional)
- Botón “Agregar al carrito”
- Envío correcto de datos del accesorio seleccionado
- Manejo del contador dinámico

---

##  3️ Laura – Formularios, validaciones y autenticación

Laura fue la responsable de toda la parte de usuarios: login, registro, perfil, y creación de accesorios.

###  Formularios principales
#### **LoginForm.jsx**
- Validación de email y contraseña
- Mensajes de error por credenciales incorrectas
- Conectado al hook `useAuth`
- Cambio entre login y registro

#### **RegisterForm.jsx**
- Registro de nuevos usuarios
- Validación de campos: nombre, correo, contraseña
- Muestra mensajes de éxito o error
- Manejo de estados: loading, error

#### **AccessoriesForm.jsx**
Formulario para agregar accesorios:
- Validación de campos obligatorios:  
  nombre, categoría, marca, precio, imagen
- Validación de URL para imagen
- Conectado con `createAccessory()` de la API
- Redirección al listado al terminar

---

###  Hooks personalizados
#### **useAuth.jsx**
Maneja autenticación:
- `login()`
- `logout()`
- Persistencia del usuario en localStorage
- Uso de Context API para compartir datos

#### **useUsers.js**
- Carga y creación de usuarios en MockAPI
- Manejo de loading y errores

---

###  Vistas desarrolladas
- **Login.jsx** → muestra el formulario Login  
- **Perfil.jsx** → muestra los datos del usuario logueado  

---

## 4️ Santiago – Navegación, Home, layout y página de detalle

fue responsable de toda la navegación, la estructura general de la página, las rutas principales y parte del contenido de la página Home.
###  Rutas configuradas con React Router
Configuro todas las rutas principales del proyecto:
- `/` → Página Home
- `/crear` → Formulario para añadir un accesorio
- `/accesorio/:id` → Página de detalle del accesorio

###  Desarrollo del Layout.jsx
Implemento todo el layout general del proyecto, incluyendo:
- El **Navbar**
- El logo
- Los enlaces principales
- El mensaje de bienvenida
- El comportamiento responsive
- Estilos combinando **Tailwind** con CSS personalizado
Este layout funciona como el contenedor principal de toda la aplicación.

###  Trabajo en la página Home
Además del layout, también se encargo de desarrollar la página **Home**, donde organizo el contenido principal que da la bienvenida al usuario.

Dentro de Home agrego:
- Una sección **Sobre Nosotros**, explicando la esencia de Sparkly.
- Una sección **Contáctanos**, para que los usuarios pudieran ubicar la información de contacto y redes.
- El diseño general y la estructura estética de la pantalla.
Estas secciones ayudan a que el proyecto tenga una presentación más profesional y cercana al usuario.

###  Desarrollo de AccessoryDetail.jsx
Fue el responsable de implementar la página de detalle del accesorio, la cual muestra la información completa cuando el usuario selecciona un producto.

En esta vista se muestra:
- Nombre del accesorio
- Precio
- Marca
- Categoría
- Imagen
- Descripción completa
Organizo todo para que los datos se cargaran dinámicamente según el ID del accesorio seleccionado, permitiendo una experiencia más fluida y clara.


#  Tecnologías Utilizadas

| Área | Tecnología |
|------|------------|
| Frontend | React, Vite |
| Estilos | Tailwind CSS, CSS Modules |
| API | MockAPI |
| Estado | Hooks y Context API |
| Rutas | React Router |
| HTTP | Axios |

---

# Estructura del Proyecto

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
