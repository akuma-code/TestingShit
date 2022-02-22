import Router from 'express'
import PostController from "./PostController.js";

const router = new Router()
router.get('/', (req, res) => {
    res.status(200).sendFile("../public/index.html")
})
router.get('/post/:id', PostController.getOne)
router.get('/posts', PostController.getAll)
router.post('/posts', PostController.create)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router