import ReactDOM from "react-dom";
import './styles/Modal.css'
import IModalProps from "./interfaces/IModalProps.tsx";

export default function Modal( { children, isSalesModal }: IModalProps) {
    return ReactDOM.createPortal( (
        <>
            <div className={ "modal-backdrop" }>
                <div className={ "modal" } style={ {
                    border: "4px solid",
                    borderColor: isSalesModal ? "#ff4500" : "#555",
                    textAlign: "center"
                } }>
                    { children }
                </div>
            </div>
        </>
    ), document.body)
}
