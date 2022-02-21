import Router from 'express'
import PostController from "./PostController.js";

export const router = new Router()
router.get('/', (req, res) => {
    res.status(200).sendFile("../public/index.html")
})
router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)