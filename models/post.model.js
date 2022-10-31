const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from posts');
};

const getById = (postId) => {
    return executeQueryOne('select * from posts where id = ?', [postId]);
};

module.exports = { getAll, getById };