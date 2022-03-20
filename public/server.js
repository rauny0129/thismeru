// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require('express');
const path = require('path');
// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express();
const cors = require('cors');


// 3000 포트로 서버 오픈
app.use(cors());
app.use('/favicon.ico', express.static(path.join(__dirname + '/0.jpg')));
const port = 9000;

app.listen(port, ()=>{console.log(__dirname) });

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
}); 

// 이제 터미널에 node app.js 를 입력해보자.