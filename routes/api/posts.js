const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Obtención de los posts');
});

router.post('/', (req, res) => {
    res.send('Creación de un post');
});

// api/posts/:postId
// Recuperar un post (incluyendo los datos del autor)

// api/posts/author/:authorId
// Recuperar los diferentes posts escritos por un autor en concreto

module.exports = router;