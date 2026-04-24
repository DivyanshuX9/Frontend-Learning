let ar=[2, 4 ,6 ,7]

console.log(ar);

let a=[1,2,3,4,5,6]

a.push("jack");
console.log(a);

a.pop();

console.log(a);

a.shift();//Delete's first element

console.log(a);

a.unshift("jack")//Add a element at beginning

console.log(a);

delete a[3]; //[ 'jack', 2, 3, <1 empty item>, 5, 6 ] , memory allocated but nothing is stored 

console.log(a);

a.concat(a,ar)// existing array will not be changed;

console.log(a);
console.log(a.concat(a,ar));

a.sort();

