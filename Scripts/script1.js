
// JavaScript for Draggable Square Elememt

let draggableItem;

function Drag(){
let dragDiv=document.getElementById("dragDiv");
dragDiv.onmousedown=()=>{
    draggableItem=dragDiv;
}

document.onmousemove=(ev)=>{
    let h=ev.pageX;
    let v=ev.pageY;

    draggableItem.style.left=h+"px";
    draggableItem.style.top=v+"px";
}

document.onmouseup=()=>{
    draggableItem=null;
}
}