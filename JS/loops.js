console.log("Loops")
// let a=1;

// for(let b=0;b<=a;b++){
//     console.log(b+a)
// }


// for(let i=0;i<array.length;i++){
//     console.log(array[i])
// }
let obj={
    name:"harry",
    role:"programmer",
    company:"Subcontinent"
}
for (const key in obj) {
        const element = obj[key];
    console.log(element)
}