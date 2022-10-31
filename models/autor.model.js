const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from autores');
};

const getById = (authorId) => {
    return executeQueryOne('select * from autores where id = ?', [authorId]);
};

const create = ({ nombre, email, imagen }) => {
    return executeQuery('insert into autores (nombre, email, imagen) values (?, ?, ?)', [nombre, email, imagen]);
};

module.exports = { getAll, getById, create };