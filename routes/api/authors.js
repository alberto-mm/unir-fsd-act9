const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Obtención de los autores');
});

router.post('/', (req, res) => {
    res.send('Creación de un autor');
});

module.exports = router;