const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.get('/reactB', (req, res) => {
    res.send('B');
});

app.get('/echoA', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/reactA');
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Service A 호출 실패');
    }
});

app.listen(PORT, () => {
    console.log(`Service B는 ${PORT} 포트에서 실행 중입니다.`);
});

