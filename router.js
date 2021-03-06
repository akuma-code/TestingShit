import Router from 'express'
import PostController from "./PostController.js";
import okCTRL from "./okna/oknaCTRL.js";
import {
    __dirname
} from "./utils.js"


const PagePath = `${__dirname}/public/okdb.html`
const addPath = `${__dirname}/public/okdb_add.html`

const router = new Router()
router.get('/add', (req, res) => {
    res.status(200).sendFile(addPath)
})
router.get('/okHTML', async (req, res) => {
    okCTRL.getList();

    res.status(200).sendFile(PagePath);

})

router.post("/add", okCTRL.add)
router.get('/posts/:id', PostController.getOne)
router.get('/posts', PostController.getAll)
router.post('/create', PostController.create)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)




export default router