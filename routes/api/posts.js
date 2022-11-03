const router = require('express').Router();

const { getAll, getById, getByAuthor, create } = require('../../models/post.model');

// /api/posts
// Recuperar todos los posts (incluyendo los datos de sus autores)
router.get('/', async (req, res) => {
    try {
        const posts = await getAll();
        res.json(posts);
    } catch (err) {
        res.json({ error: err.message });
    }
});

// /api/posts/:postId
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

// /api/posts/author/:authorId
// Recuperar los diferentes posts escritos por un autor en concreto
router.get('/author/:authorId', async (req, res) => {
    const { authorId } = req.params;

    try {
        const posts = await getByAuthor(authorId);
        res.json(posts);
    } catch (err) {
        res.json({ error: err.message });
    }
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