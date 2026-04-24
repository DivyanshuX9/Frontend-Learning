document.querySelector(".box")
//<div class=​"box">​Hey im a boxx ​</div>​

document.querySelector(".box").innerHTML
//'Hey im a boxx '

document.querySelector(".container").innerHTML
//'\n        <div class="box">Hey im a boxx </div>\n   '

document.querySelector(".container").innerText
//'Hey im a boxx\nHey im a boxx'
document.querySelector(".container").outerHTML
//'<div class="container">\n        <div class="box">Hey im a boxx </div>\n        <div class="box">Hey im a boxx </div>\n    </div>'

document.querySelector(".container").tagName
//'DIV'

document.querySelector(".container").textContent
//'\n        Hey im a boxx \n        Hey im a boxx \n    '

document.querySelector(".container").hidden
//false

document.querySelector(".container").nodeName
//'DIV'

document.querySelector(".box").innerHTML="hey i am divyanshu"
//'hey i am divyanshu'

document.querySelector(".container").hasAttribute('style')
//false

document.querySelector(".container").setAttribute('style',"display:inline")
//undefined

document.querySelector(".container").innerText
//'Hey im a boxx\nHey im a boxx'

document.querySelector(".container").outerHTML
//'<div class="container">\n        <div class="box">Hey im a boxx </div>\n        <div class="box">Hey im a boxx </div>\n    </div>'



document.querySelector(".box").innerHTML="hey i am divyanshu"
'hey i am divyanshu'
document.querySelector(".container").hasAttribute('style')
false
document.querySelector(".container").setAttribute('style',"display:inline")
undefined