
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className="Backdrop"> </div>
};

const  ModalOverlay = (props) => {
    return(
        <div className="Modal">
            <div className="Content"> {props.children} </div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = props => {
    return(
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement )}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalElement)}
        </>
    );
};


export default Modal;