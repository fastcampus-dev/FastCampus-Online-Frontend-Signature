// 상수도 export 가능
// module.exports.A = 1;
const A = 1;
// 이런 식으로도 export 가능
// module.exports.encrypt = function encrypt(data) {
//     return "encrypted data";
// }

function encrypt(data) {
    return "encrypted data";
}

// module 생략해도 가능
// exports.someFunction = function someFunction() {

// }

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`${encryptedData} is being sent to ${url}`);
}

// module.exports = {
//     // send: send
//     send
// }

console.log('we are in request.mjs');

export {
    send,
    A
}


