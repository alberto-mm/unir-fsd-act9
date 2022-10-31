const router = require('express').Router();

const { getAll, getById } = require('../../models/autor.model');

router.get('/', async (req, res) => {
    try {
        const authors = await getAll();
        res.json(authors);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/', (req, res) => {
    res.send('Creación de un autor');
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

module.exports = router;