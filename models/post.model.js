const { executeQuery } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from posts');
};

module.exports = { getAll };