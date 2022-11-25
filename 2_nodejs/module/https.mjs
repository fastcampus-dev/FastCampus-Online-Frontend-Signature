// const request = require('./request');
// const response = require('./response');

// const { send } = require('./request');
// const { read } = require('./response');

import { send } from './request.mjs';
import { read } from './response.mjs';
import { A } from './request.mjs';
// default로 export 했다면 이렇게도 가능
// const read = require('./response');

function makeRequest(url, data) {
    // 요청을 보내기 
    send(url);
    // 데이터를 return 하기
    return read();
}

const responseData = makeRequest('https://naver.com', 'any data');
console.log('responseData', responseData);


console.log('require.cache', require);

