import Router from 'express'
import PostController from "./PostController.js";

const router = new Router()
// router.get('/', (req, res) => {
//     // res.status(200).render("../public/index.html")
// })
router.get('/posts/:id', PostController.getOne)
router.get('/posts', PostController.getAll)
router.post('/create', PostController.create)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router