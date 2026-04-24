let arr=[1,13,5,7,11]
let newarr=[];
for (let index = 0; index < arr.length; index++) {
    newarr.push( arr[index]**2);   
}

// [ 1, 169, 25, 49, 121 ]

newarr=arr.map((e)=>{
    return e**2;
})
console.log(newarr)

// [ 1, 169, 25, 49, 121 ]

const greaterThanSeven=(e)=>{
    if(e<7){
        return true;
    }
    return false;
}

console.log(arr.filter(greaterThanSeven))

// or

console.log (arr.filter((e)=>{
    if(e<7){
        return true
    }
    return false
}
))

let arr2=[1,2,3,4,5,6,7]

const red=(a,b)=>{
    return a*b
}


console.log(arr2.reduce(red));
// 1*2=2
// then 2*3
// then 6*4
// so on..
//and returns final value

Array.from("Harry")

//output:
//['H','a','r','r','y']