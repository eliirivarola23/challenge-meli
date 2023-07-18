
# Test Mercado Libre - React y Node.js
Este proyecto es un Challenge de Mercado Libre que consiste en una aplicación web desarrollada utilizando React en el frontend y Node.js con express en el backend.

## Instalación
Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```bash
  npm install
```
## Levantar el Frontend
Para levantar el frontend de la aplicación, dirígete al directorio frontend y ejecuta el siguiente comando: 

```bash
cd frontend
```
Luego crea un archivo .env y agregale la siguiente variable de entorno

`REACT_APP_HOST=http://localhost:3001/api/v1/`

Y por último:
```bash
npm start
```
Esto iniciará el servidor de desarrollo y la aplicación estará disponible en http://localhost:3000/.

## Levantar el Backend
Para levantar el backend de la aplicación, asegúrate de estar en la raíz del proyecto. Crea un archivo .env y agregale la siguiente variable de entorno

`PORT=3001`

 y ejecuta el siguiente comando:

```
nodemon
```
El servidor backend se ejecutará en http://localhost:3001/.

## Descripción del Proyecto
El proyecto es una implementación básica de un sitio de búsqueda de productos, similar al sitio de Mercado Libre. La aplicación permite a los usuarios buscar productos a través de una barra de búsqueda y muestra los resultados obtenidos de la API de Mercado Libre.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

- frontend: Contiene el código fuente del frontend desarrollado con React.
- Carpeta raíz:  Contiene el código fuente del backend desarrollado con Node.js.

## Dependencias Utilizadas
A continuación, se enumeran las principales dependencias utilizadas en el proyecto:

### Frontend:

- React: Biblioteca para construir interfaces de usuario.
- Axios: Cliente HTTP para hacer peticiones a la API del backend.
### Backend:

- Express: Framework web para Node.js que facilita la creación de APIs.
- Axios: Cliente HTTP para hacer peticiones a la API del backend.
- Nodemon: Utilidad para reiniciar automáticamente el servidor en desarrollo cuando se realizan cambios en el código.
