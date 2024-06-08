import { useRef, forwardRef, useImperativeHandle } from "react";
import "./Modal.css"

const Modal = forwardRef(({ children }:any, ref) => {

    const modal = useRef<any>();

    useImperativeHandle(ref, () => ({ abrir, fechar }));

    function abrir(){
        modal.current.style.display = "block";
    }
    function fechar(){
        modal.current.style.display = "none";
    }

    return (
        <div ref={modal} className="modal">
            <div className="modal-content">
                <span className="close" onClick={fechar}>&times;</span>
                
                {children} 
             
            </div>
        </div>
    );
});

export default Modal;