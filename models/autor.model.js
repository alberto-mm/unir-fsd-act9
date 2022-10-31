const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from autores');
};

const getById = (authorId) => {
    return executeQueryOne('select * from autores where id = ?', [authorId]);
};

module.exports = { getAll, getById }