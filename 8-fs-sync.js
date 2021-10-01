const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

//if file is not there node will create a file and if file is there then node will overwrite all the content
//writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`);

//to append in existing content use below
writeFileSync('./content/result-sync.txt', 
                `Here is the result ${first}, ${second}`, {flag : 'a'});
