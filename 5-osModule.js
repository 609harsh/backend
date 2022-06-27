//OS Modules
const os=require('os');

// os.userInfo fives info on user 
const user=os.userInfo();
console.log(user);

// os.uptime gives uptime of computer
console.log("Uptime of yuur computer "+os.uptime());

// Some more Methods 
const currentOS={
    name:os.type(),
    version:os.version(),
    release:os.release(),
    freemen:os.freemem(),
    totalmem:os.totalmem()
}
console.log(currentOS);




