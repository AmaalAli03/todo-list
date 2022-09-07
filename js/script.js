const myList = document.getElementsByTagName("LI");

//here we are going through each list item by accessing the elements through getElementsByTagName above
for (let i = 0; i < myList.length; i++) {
  const span = document.createElement("SPAN");
  const symbol = document.createTextNode("\u00D7");
  span.className = "delete";

  span.appendChild(symbol);
  myList[i].appendChild(span);
}
// implement delete funtionality
const remove = document.getElementsByClassName("delete")
for (let i = 0; i < remove.length:i++){
    remove[i].onclick = function(){
        const hide = this.parentElement
        hide.style.display="none"
    };
}
const list = document.querySelector("ul");
list.addEventListener("click",
function(event){
    if(event.target.tagline === "LI"){
        event.target.classList.toggle("checked")
    }
}
)