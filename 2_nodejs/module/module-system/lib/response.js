function decrypt(data) {
    return 'decrypted data';
}

function read() {
    return decrypt('data');
}

console.log('we are in the response module');

module.exports = {
    read,
    decrypt
}