import ReactDOM from "react-dom";
import './styles/Modal.css'
import ModalProps from "./interfaces/IModalProps.tsx";

export default function Modal( { children, handleClose, isSalesModal }: ModalProps) {
    return ReactDOM.createPortal( (
        <>
            <div className={ "modal-backdrop" }>
                <div className={ "modal" } style={ {
                    border: "4px solid",
                    borderColor: isSalesModal ? "#ff4500" : "#555",
                    textAlign: "center"
                } }>
                    { children }
                    <button
                        onClick={ handleClose }
                        className={ isSalesModal ? "sales-btn" : "" }
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    ), document.body)
}
