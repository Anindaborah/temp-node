const os= require('os')

const user=os.userInfo()

console.log(user);
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS={
    name:os.type(),
    totalmemory:os.totalmem(),
    freememory:os.freemem(),
}

console.log(currentOS);




