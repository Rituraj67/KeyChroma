// /api/proxy.js
export default async function handler(req, res) {
    const url = `http://13.61.6.107${req.url}`; // Proxy to your backend
    
    const response = await fetch(url, {
        method: req.method,
        headers: req.headers,
        body: req.body,
    });

    const data = await response.text();
    res.status(response.status).send(data);
}
