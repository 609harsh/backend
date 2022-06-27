const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first+"\n"+second);

const write=writeFileSync('./content/subfolder/file-write.txt',`Hello file added ${"\n"}${first+"\n"+second}`);
console.log(write);

