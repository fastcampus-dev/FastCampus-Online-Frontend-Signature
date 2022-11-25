// const { send } = require('./lib/request');
// const { read } = require('./response');

const { send, read } = require('./lib');

function makeRequest(url, data) {
    // 요청을 보내기 
    send(url);
    // 데이터를 return 하기
    return read();
}

const responseData = makeRequest('https://naver.com', 'any data');
console.log('responseData', responseData);



// console.log(require.cache);