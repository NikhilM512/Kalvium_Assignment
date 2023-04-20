
    // JavaScript for Drag And Drop of Square Elememt

    let dragDiv1=document.getElementById("dragDiv1");
    let dropDiv1=document.getElementById("dropDiv1");
    
    dragDiv1.addEventListener('dragstart',(ev)=>{
        ev.dataTransfer.setData("text/plain", ev.target.id);
    });

    dropDiv1.addEventListener('dragover',(ev)=>{
        ev.preventDefault();
    });

    dropDiv1.addEventListener("drop",(ev)=>{
        ev.preventDefault();
        let id=ev.dataTransfer.getData("text/plain");
        dropDiv1.appendChild(document.getElementById(id));
    });
    