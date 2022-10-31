const router = require('express').Router();

const { getAll, getById, create } = require('../../models/autor.model');

router.get('/', async (req, res) => {
    try {
        const authors = await getAll();
        res.json(authors);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/:authorId', async (req, res) => {
    const { authorId } = req.params;

    try {
        const author = await getById(authorId);
        res.json(author);
    } catch (err) {
        req.json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        const author = await getById(result.insertId);
        res.json(author);
    } catch (err) {
        res.json({ error: err.mesage });
    }
});

module.exports = router;