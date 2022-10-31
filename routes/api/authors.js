const router = require('express').Router();

const { getAll } = require('../../models/autor.model');

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

module.exports = router;