// const path=require('path')

// const basepath= path.join('/content','user','text.txt')

// console.log(basepath);

// const base= path.basename(basepath)

// console.log(base);


// const absolute=path.resolve(__dirname,'content','user','text.txt')

// console.log(absolute);


const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

console.log(first);
console.log(second);


writeFileSync('./content/result.txt',`Hello this is combined ${first, second}`,{flag:'a'})









// const random=30
// if (random<30) {
//     console.log('smaller number');
    
// } else {
//     console.log('bigger number');
    
// }
// console.log(`this is my first node code`);
