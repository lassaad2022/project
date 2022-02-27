var list_todo=[];
function add(){
var value = document.getElementById("todo-value").value;
list_todo.push(value);
document.getElementById("todo-value").value="";
updatetab();
}


function updatetab(){
    document.getElementById("tab").innerHTML="";
for(var i=0 ; i<list_todo.length;i++) {
document.getElementById("tab").innerHTML+='<tr><th scope="row">'+eval(i+1)+'</th><td>'+list_todo[i]+'<button onclick=del("'+list_todo[i]+'")>Delete</button></td></tr>';
   }
   var buttons = document.querySelectorAll('button')
  /* for (let i = 1; i < buttons.length; i++) {
       buttons[i].addEventListener('click',function removeTask(list_todo[i]){
        list_todo.pop(list_todo[i]);
        updatetab();
                var cible = e.target
        var tr= cible.parentElement.parentElement
        tr.remove()
        console.log(tr);
        console.log(cible); 
       })
       
   } */
}
function del(v){
    list_todo.splice(list_todo.indexOf(v),1);
        updatetab();
}