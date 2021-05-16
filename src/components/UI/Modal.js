
import ReactDOM from "react-dom";

const Backdrop = ({onClose}) => {
    return <div onClick={onClose} className="Backdrop"> </div>
};

const  ModalOverlay = (props) => {
    return(
        <div className="Modal">
            <div className="Content"> {props.children} </div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = ({onClose, children}) => {
    return(
        <>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement )}
            {ReactDOM.createPortal(<ModalOverlay> {children} </ModalOverlay>, portalElement)}
        </>
    );
};


export default Modal;