import express from 'express';
import path from 'path';
import morgan from "morgan";
import ip from 'ip';

const app = express()

const host = ip.address()
const port = 3001

// 打印请求日志
app.use(morgan('dev'))

app.get('/say', (req, res) => {
    const data = { message: 'Hello from the server!' };
    const callback = req.query.callback;

    if (callback) {
        // This is a JSONP request.
        res.setHeader('Content-Type', 'text/javascript');
        res.send(`${callback}(${JSON.stringify(data)});`);
    } else {
        // Regular JSON response for non-JSONP requests.
        res.json(data);
    }
});

app.use(express.static(path.join("public")));
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})
