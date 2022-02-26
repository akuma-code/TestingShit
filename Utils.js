import {
    dirname
} from 'path';
import {
    fileURLToPath
} from 'url';

export async function $request(url, method = 'GET', data = null) {
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


export const Logger = async (req, res, next) => {
    console.log('(Log)req.method / req.url :>> ', req.method, "||=>", req.url, );

    next()
    // await request("/api").then(res => console.log(res))
}


export const __dirname = dirname(fileURLToPath(
    import.meta.url))