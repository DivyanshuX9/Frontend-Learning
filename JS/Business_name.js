let a="Crazy Amazing Fire"
let b="Engine Foods Garments"
let c="Bros Limited Hub"

if(Math.random()<0.3333){
    console.log(a.slice(0,5))
}
else if(Math.random()>0.3333 && Math.random()<0.66666){
    console.log(a.slice(6,13))
}
else{
    console.log(a.slice(14,18))
}

if(Math.random()<0.3333){
    console.log(b.slice(0,6))
}
else if(Math.random()>0.3333 && Math.random()<0.66666){
    console.log(b.slice(7,11))
}
else{
    console.log(b.slice(13,20))
}

if(Math.random()<0.3333){
    console.log(c.slice(0,4))
}
else if(Math.random()>0.3333 && Math.random()<0.66666){
    console.log(c.slice(5,12))
}
else{
    console.log(c.slice(13,16))
}
