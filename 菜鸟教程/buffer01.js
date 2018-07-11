const buffer1 = Buffer.from('runoob', 'ascii');

console.log(buffer1);

// 输出 72756e6f6f62
console.log(buffer1.toString('hex'));

// 输出 cnVub29i
console.log(buffer1.toString('base64'));

const buffer2 = Buffer.alloc(256);

len = buffer2.write('www.liucong.net');

console.log('写入的字节数为' + len);