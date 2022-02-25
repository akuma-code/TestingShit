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


async function request(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body

        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response.json()
    } catch (e) {
        console.warn('Error:', e.message)
    }
}
export {
    Logger,
    __dirname,
    request
}