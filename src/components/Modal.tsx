import './styles/Modal.css'

export default function Modal( { children }: any) {
    return (
        <>
            <div className={ "modal-backdrop" }>
                <div className={ "modal" }>
                    { children }
                </div>
            </div>
        </>
    )
}
