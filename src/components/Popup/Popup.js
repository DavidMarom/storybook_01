import React from 'react';
import PropTypes from "prop-types"
import { PopupContainer } from "./Popup.style"

const Popup = ({
    show,
    children,
}) => {
    if (show) {
        return (
            <PopupContainer>
                {children}
            </PopupContainer>
        )
    }
}

Popup.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Popup