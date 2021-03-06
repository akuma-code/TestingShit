import PostService from "./PostService.js";
/**@class Класс для работы с данными клиент-сервер
 * @params (req, res)
 */
class PostController {
    async create(req, res) {
        try {
            console.count("post added")

            const post = await PostService.create(req.body)

            res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        const {
            id
        } = req.params
        console.log("get one: ", id);


        try {
            const post = await PostService.getOne(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new PostController();