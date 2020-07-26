var list = document.getElementById("list");

function addItem()
{
    var input_item = document.getElementById("todo");
    var li = document.createElement('li')
    var text = document.createTextNode(input_item.value)
    li.setAttribute("class","lists")
    li.appendChild(text)


    // delete button
    var del = document.createElement("button")
    var del_text = document.createTextNode("Delete")
    del.setAttribute("class","delete")
    del.setAttribute("onclick","deleteItem(this)")

    del.appendChild(del_text)

    // Edit Element
   
var edit = document.createElement("button");
var edittext =  document.createTextNode("Edit");
edit.appendChild(edittext)
edit.setAttribute("class","del")
edit.setAttribute("onclick","edititem(this)")

//line throught
var done = document.createElement("button");
var dontext = document.createTextNode("Done");
done.appendChild(dontext)
done.setAttribute("class","delete")
done.setAttribute("onclick","done(this)")




li.appendChild(edit)
li.appendChild(done)
list.appendChild(li)
li.appendChild(del)



input_item.value = "";

console.log(input_item.value)

}

function deleteItem(m)
{
m.parentNode.remove()
}

function DeleteAll()
{
list.innerHTML = "";
}

function edititem(e)
{
var val = prompt("Enter updated Item",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue = val; 
}

function done(e)
{
console.log(e.parentNode.setAttribute("class","done"))
}