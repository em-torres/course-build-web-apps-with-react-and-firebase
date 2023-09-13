import React from "react";

export default interface ModalProps {
    children: React.ReactElement[],
    handleClose: () => void,
    isSalesModal: boolean
}
