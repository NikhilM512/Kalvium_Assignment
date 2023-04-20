
    // JavaScript for Drag And Drop of Multiple Square Elements
    let dragDiv2=document.getElementById("dragDiv2");
    let dropDiv2s=document.getElementsByClassName("dropDiv2");
    
    dragDiv2.addEventListener('dragstart',(ev)=>{
        ev.dataTransfer.setData("dragKey", ev.target.id);
        ev.target.className="prev"
    });

    dragDiv2.addEventListener('dragend',(ev)=>{
        ev.target.className="next"
    });

    for(let dropDiv2 of dropDiv2s){

    dropDiv2.addEventListener('dragover',(ev)=>{
        ev.preventDefault();
    });

    dropDiv2.addEventListener("drop",(ev)=>{
        ev.preventDefault();
        let id=ev.dataTransfer.getData("dragKey");
        dropDiv2.appendChild(document.getElementById(id));
    });

}
    