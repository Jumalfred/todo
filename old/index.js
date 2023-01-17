var input = document.getElementsByTagName("input")[0];
var ul = document.getElementsByTagName("ol")[0];
var btn = document.getElementById("btn");
var oginga = "";
var del = "";
btn.addEventListener("click",function(){
    if(input.value !==""){
    let li = document.createElement("li");
    del = document.createElement("button");
    let text = document.createTextNode("del");
    del.append(text);
    li.appendChild(del);
    li.append(input.value);
    ul.appendChild(li); 
    input.value = "";
    del=document.getElementsByTagName("button");
       for(let j=0; j<del.length; j++){
        del[j].addEventListener("click",function(){
         oginga = this.parentElement;
         oginga.style.display = "none";
        })
    }
    let lists = document.querySelectorAll("li");
    for(let u=0; u<lists.length; u++){
        lists[u].contentEditable = true;
        del.contentEditable = false;
        lists[u].spellcheck = false;
    }
    }
    else if(input.value ===""){
        alert("Please enter a valid value !")
    }
})
var juma = document.getElementsByTagName("li");
for(let i=0;i<juma.length;i++){
 del = document.createElement("button");
    let text = document.createTextNode("del");
    del.append(text)
    juma[i].appendChild(del)
 }
 del=document.getElementsByTagName("button");
       for(let k=0; k<del.length; k++){
        del[k].addEventListener("click",function(){
         oginga = this.parentElement;
         oginga.style.display = "none";
        })
    }
   let lists = document.querySelectorAll("li");
    for(let u=0; u<lists.length; u++){
        lists[u].contentEditable = true;
        del.contentEditable = false;
        lists[u].spellcheck = false;
    }
    document.getElementById("year").innerHTML = new Date().getFullYear();