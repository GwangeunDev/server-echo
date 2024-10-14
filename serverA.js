const express = require('express'); // express 호출. 서버를 구축할 때 필요
const axios = require('axios'); //axios 호출. 서버 간 HTTP 요청을 보내는데 사용
const app = express(); // express 객체 app 설정
const PORT = 3000; // serverA의 포트 번호 정의

app.get('/reactA', (req, res) => { // '/reactA' 경로로 요청이 들어오면 'A'라는 문자열을 전달
    res.send('A');
});

app.get('/echoB', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/reactB'); 
        // async와 await 키워드를 사용하여 비동기 요청을 처리
        // Service B의 '/reactB'에 GET 요청
        res.send(response.data); //Service B에서의 response 중 data(='B')를 츨력
    } catch (error) { //위에서 실패 시 catch블록에서 에러 처리
        res.status(500).send('Service B 호출 실패'); //호출 실패 시 실패메세지 보냄
    }
});

app.listen(PORT, () => {
    console.log(`Service A는 ${PORT} 포트에서 실행 중입니다.`);
    // 지정된 포트 번호에서 서버가 정상적으로 실행되었는지 확인
});