const {readFile,writeFile}= require('fs')


console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        
    };
    const first=result
readFile('./content/second.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        
    };
    const second=result

   writeFile('./content/result-fs-async.txt',
    `Here is the result: ${first},${second}`,
    (err, result)=>{
        if (err) {
            console.log(err);
            
        };
        console.log('The task is completed');
        
    }
   )
})

})
console.log('Starting a new task');
