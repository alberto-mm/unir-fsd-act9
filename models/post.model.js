const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select p.*, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen from posts as p join autores as a on p.fk_autor = a.id');
};

const getById = (postId) => {
    return executeQueryOne('select p.*, a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen from posts as p join autores as a on p.fk_autor = a.id where p.id = ?', [postId]);
};

const getByAuthor = (authorId) => {
    return executeQuery('select * from posts where fk_autor = ?', [authorId]);
};

const create = ({ titulo, descripcion, categoria, fk_autor }) => {
    return executeQuery('insert into posts (titulo, descripcion, categoria, fk_autor) values (?, ?, ?, ?)', [titulo, descripcion, categoria, fk_autor]);
};

module.exports = { getAll, getById, getByAuthor, create };