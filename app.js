var list = document.getElementById("taraGet");

function add(){
    var inp = document.getElementById("inp");
    var li = document.createElement("li")
    var liText = document.createTextNode(inp.value)
    li.appendChild(liText)

   var eButt = document.createElement("button")
   var eText = document.createTextNode("EDIT")
   eButt.appendChild(eText)
   li.appendChild(eButt)
   eButt.setAttribute("onclick" , "edit(this)")


   var dButt = document.createElement("button")
   var dText = document.createTextNode("DELLETE")
   dButt.appendChild(dText)
   li.appendChild(dButt)
   dButt.setAttribute("onclick" , "dell(this)")

    list.appendChild(li)

 
}

function dellAll(){
    list.innerHTML = ""
}
function dell(e){

e.parentNode.remove()

}

function edit(e){
    var val = e.parentNode.firstChild.nodeValue;
    var cedit = prompt("Enter corrent Text", val)
    e.parentNode.firstChild.nodeValue = cedit
    console.log(val)
    

}