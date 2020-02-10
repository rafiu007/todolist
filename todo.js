
//adding new element
function newElement(){
    var li=document.createElement("li");
    var inputval=document.getElementById("myInput").value;
    var t=document.createTextNode(inputval);
    li.appendChild(t);
    if(inputval===''){
        alert("Enter something");
    }
    else{
        document.getElementById("mylist").appendChild(li);
    }

    document.getElementById("myInput").value="";

    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display="none";
        }
    }

}


//removing every item

function removeAll(){
    var del=document.getElementsByTagName("ul");
    del[0].innerHTML="";
}

var close=document.getElementsByClassName("close");

var i;


// hiding a particular item

for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}
//for marking an item as done...unclear as of now
var list =document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName==="LI"){
        ev.target.classList.toggle('checked');
    }
},false);
