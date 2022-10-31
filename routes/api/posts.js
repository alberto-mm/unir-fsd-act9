const router = require('express').Router();

const { getAll, getById, create } = require('../../models/post.model');

router.get('/', async (req, res) => {
    try {
        const posts = await getAll();
        res.json(posts);
    } catch (err) {
        res.json({ error: err.message });
    }
});

// api/posts/:postId
// Recuperar un post (incluyendo los datos del autor)
router.get('/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await getById(postId);
        res.json(post);
    } catch (err) {
        res.json({ error: err.message });
    }
});

// api/posts/author/:authorId
// Recuperar los diferentes posts escritos por un autor en concreto
router.get('/author/:authorId', (req, res) => {
    const { authorId } = req.params;

    res.send('Obtención de los posts del autor con ID ' + authorId);
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        const post = await getById(result.insertId);
        res.json(post);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;