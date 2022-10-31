const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from posts');
};

const getById = (postId) => {
    return executeQueryOne('select * from posts where id = ?', [postId]);
};

const create = ({ titulo, descripcion, categoria, fk_autor }) => {
    return executeQuery('insert into posts (titulo, descripcion, categoria, fk_autor) values (?, ?, ?, ?)', [titulo, descripcion, categoria, fk_autor]);
};

module.exports = { getAll, getById, create };