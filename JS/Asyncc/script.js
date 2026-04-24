// async function getData(){
//     // Simulate getting data from server
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }


// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully


async function getData(params) {
    let x=fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data= await  x.json
    console.log(x);
     return 455
}
async function main(){

    console.log("Loading modules")
    
    console.log("Do something else")
    
    console.log("Load Data")
    let data = await getData();
    console.log(data)
    
     console.log('process data');
    
      console.log('task 2');
}

main()
// data.then((v)=>{
//     console.log(data)

//     console.log('process data');

//     console.log('task 2');
// })


