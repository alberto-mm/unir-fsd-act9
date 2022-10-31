const router = require('express').Router();

const { getAll } = require('../../models/post.model');

router.get('/', async (req, res) => {
    try {
        const posts = await getAll();
        res.json(posts);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/', (req, res) => {
    res.send('Creación de un post');
});

// api/posts/:postId
// Recuperar un post (incluyendo los datos del autor)
router.get('/:postId', (req, res) => {
    const { postId } = req.params;

    res.send('Obtención del post con ID ' + postId);
});

// api/posts/author/:authorId
// Recuperar los diferentes posts escritos por un autor en concreto
router.get('/author/:authorId', (req, res) => {
    const { authorId } = req.params;

    res.send('Obtención de los posts del autor con ID ' + authorId);
});

module.exports = router;