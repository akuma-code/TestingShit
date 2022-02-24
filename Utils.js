const Logger = (req, res) => {
    console.log("(L)req.body >> ", req.body);
    console.log("(L)query.id >> ", req.query.id)
}

import {
    dirname
} from 'path'
import {
    fileURLToPath
} from 'url'
const __dirname = dirname(fileURLToPath(
    import.meta.url))

export {
    Logger,
    __dirname
}