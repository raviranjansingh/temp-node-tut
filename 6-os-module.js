const os = require('os');

//info about currnt user
const user = os.userInfo();
console.log(user);

//mothod returns the system uptime in second

console.log(`The system uptime is ${os.uptime()} secons`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);