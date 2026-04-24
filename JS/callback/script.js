console.log("no one is hacker");
console.log("you am hecker");

setTimeout(() => {
  console.log("I am inside settimeout");
}, 200);
console.log("The End");

const fn=(arg,fn) => {
  console.log("Nothing")

}



const loadScript = (src, callback) => {
  let sc= document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry");
  document.head.append(sc);
};
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(arg,fn) => {
    console.log(arg);
    fn("firstarg",()=>{
        ddg("secondgg",()=>{
            //pyramid of doom,hard to manage
        })
    })
  })
