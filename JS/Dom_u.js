document.body
//<body>​…​</body>​

document.body.childNodes
//NodeList(9) [text, div.container, text, script, text, comment, text, script, text]

document.body.childNodes[0]
// #text

document.body.childNodes[1]
//<div class=​"container">​…​</div>​

let cont=document.body.childNodes[1]
//undefined
cont.lastElementChild
//<div class=​"box">​Box5​</div>​

cont.lastElementChild.style.color="red"
//'red'
cont.lastElementChild.style.backgroundcolor="azure"
//'azure'

document.body.firstElementChild.children
//HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.firstElementChild.childNodes
//NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.children[1].rows
// HTMLCollection(3) [tr, tr, tr]

document.body.children
// HTMLCollection(4) [div.container, table, script, script]

document.body.children[1].rows
// HTMLCollection(3) [tr, tr, tr]
