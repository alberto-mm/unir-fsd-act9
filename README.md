# ACTIVIDAD 9. Diseño de una API con base de datos MySQL

Esta actividad simula la creación de un proyecto que permita gestionar los datos de un **blog**. Se dispone de una base de datos en MySQL con dos tablas: **posts** y **autores**. La tabla de posts incluye, además de la propia información del post, una clave externa que hace referencia al autor.

## Peticiones disponibles

### Posts
- **GET http://localhost:3000/api/posts**: Devuelve una lista con todos los posts del blog incluyendo los datos de sus autores.
- **GET http://localhost:3000/api/posts/POSTID**: Devuelve el post con id POSTID incluyendo los datos de su autor.
- **GET http://localhost:3000/api/posts/author/AUTHORID**: Devuelve los diferentes posts escritos por el autor con id AUTHORID.
- **POST http://localhost:3000/api/posts**: Permite añadir un nuevo post. Ejemplo con REST Client (VSCode):

        POST http://localhost:3000/api/posts
        Content-Type: application/json

        {
            "titulo": "Lorem Ipsum",
            "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla odio, dignissim non vehicula et, vehicula ac orci. Ut vel dolor ut neque tincidunt aliquam vitae in justo. Aenean eget purus ut neque placerat imperdiet. Etiam ut aliquet nisl, egestas consequat sem. Vivamus molestie lacinia fermentum. Vivamus in vestibulum arcu, sed auctor quam. In posuere ornare libero. Mauris iaculis pellentesque ex, at interdum nulla pulvinar quis. Ut quis urna in nisi facilisis tincidunt non ut nisi. Praesent sollicitudin rutrum felis, nec rutrum risus.",
            "categoria": "ciencia",
            "fk_autor": 1
        }

### Autores
- **GET http://localhost:3000/api/authors**: Devuelve una lista con todos los autores del blog.
- **GET http://localhost:3000/api/authors/AUTHORID**: Devuelve el autor con id AUTHORID.
- **POST http://localhost:3000/api/authors**: Permite añadir un nuevo autor. Ejemplo con REST Client (VSCode):

        POST http://localhost:3000/api/authors
        Content-Type: application/json

        {
            "nombre": "Manuel",
            "email": "manuel@gmail.com",
            "imagen": "https://randomuser.me/api/portraits/men/3.jpg"
        }

## Ejemplo de fichero .env
*(Crear en directorio raíz del proyecto)*

    PORT=3000

    DB_HOST="localhost"
    DB_USER="root"
    DB_PASSWORD=<contraseña>
    DB_PORT=3306
    DB_DATABASE="unir_fsd_act9"