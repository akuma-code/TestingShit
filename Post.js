import mongoose from "mongoose";
/** @const схема запроса в МонгоДБ
 * @param author автор
 * @param title заголовок
 * @param content данные
 */
const Post = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
})

export default mongoose.model("Post", Post)