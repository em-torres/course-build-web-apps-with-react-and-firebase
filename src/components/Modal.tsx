import ReactDOM from "react-dom";
import './styles/Modal.css'

export default function Modal( { children, handleClose, isSalesModal }: any) {
    return ReactDOM.createPortal( (
        <>
            <div className={ "modal-backdrop" }>
                <div className={ "modal" } style={ {
                    border: "4px solid",
                    borderColor: isSalesModal ? "#ff4500" : "#555",
                    textAlign: "center"
                } }>
                    { children }
                    <button onClick={ handleClose }>Close</button>
                </div>
            </div>
        </>
    ), document.body)
}
