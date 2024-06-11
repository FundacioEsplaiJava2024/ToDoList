import React, { useState, useEffect } from "react"

interface preventClose {
    e : string;
}

export function PopUp(){
    const [isOpen, setIsOpen] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(()=>{
        const preventClose = ({e}: preventClose) => {
            e.preventDefault();
            e.returnValue = "";
        }
        if(isOpen){
            window.addEventListener("beforeUnload", preventClose);
        }else{
            window.removeEventListener("beforeUnload", preventClose );
        }
        return ()=> window.removeEventListener("beforeUnload", preventClose );
    }, [isOpen]);

   const handleClose = ()=> {
    setIsOpen(false);
    setIsClosing(true);

   }



    return (
        <div className="pop-up-wrapper"></div>
    )
}

export function PopUpAdd(){
    return (
        <>
        <h1>Prueba</h1>
        <span>10/06/2024</span>
        <span>Deadline</span>
        <span>Urgente</span>
        <span>To Do</span>
        <p>Descripción</p>
        <button>Add</button>
        </>
    )
}


export function PopUpView(){
    return (
        <>
        <h1>Prueba</h1>
        <span>10/06/2024</span>
        <span>Deadline</span>
        <span>Urgente</span>
        <span>To Do</span>
        <p>Descripción</p>
        <button>Update</button>
        <button>Delete</button>
        </>
    )
}