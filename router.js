import Router from 'express'
import PostController from "./PostController.js";
import okCTRL from "./okna/ControllerW.js";
import {
    __dirname
} from "./Utils.js"
const PageContent = /*html*/ `
    <div>
        <a href="/">back</a><br>
        <h3>OK Database</h3>
    </div>
`;

const PagePath = `${__dirname}/public/okdb.html`
const addPath = `${__dirname}/public/okdb_add.html`

const router = new Router()
<<<<<<< HEAD
// router.get('/', (req, res) => {
//     // res.status(200).render("../public/index.html")
// })
router.get('/posts/:id', PostController.getOne)
=======
router.get('/add', (req, res) => {
    res.status(200).sendFile(addPath)
})
router.get('/okHTML', async (req, res) => {
    okCTRL.getList();

    res.status(200).sendFile(PagePath);

})

router.post("/add", okCTRL.add)
router.get('/post/:id', PostController.getOne)
>>>>>>> 41e04ce93af319e17a9be33ddd2a03ddd327aca6
router.get('/posts', PostController.getAll)
router.post('/create', PostController.create)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)




export default router