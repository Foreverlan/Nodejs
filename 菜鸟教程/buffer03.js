const buf = Buffer.from([0x11,0x12,0x13,0x14,0x15,0xff]);

const json = JSON.stringify(buf);

console.log(json);

console.log(json.type);

const copy = JSON.parse(json ,(key , value) => {
	return value && value.type === 'Buffer' ? Buffer.from(value.data) :value;
});

console.log(copy);