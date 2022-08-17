import React from "react";


interface ModalDescriptionProps {
    children: React.ReactNode
    onClose: () => void
}

export function ModalDescription({children, onClose} : ModalDescriptionProps) {
    return (
        <div className="fixed"
             onClick={onClose}
        >
            <div className="product_description">
                {children}
            </div>
        </div>
    )
}