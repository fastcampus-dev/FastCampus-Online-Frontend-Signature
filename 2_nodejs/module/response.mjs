function decrypt(data) {
    return 'decrypted data';
}

// // 만약 한 파일에 하나만 exports 한다면 이렇게도 가능
// module.exports = function read() {
//     return decrypt('data');
// }

function read() {
    return decrypt('data');
}

// module.exports = {
//     read
// }

export {
    read
}