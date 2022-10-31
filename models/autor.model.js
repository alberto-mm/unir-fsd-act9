const { executeQuery } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from autores');
};

module.exports = { getAll }