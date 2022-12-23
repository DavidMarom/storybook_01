import React from 'react'
import PropTypes from "prop-types"
import { Container } from "./Circle.style"

export default function Circle({
    size = "44px",
    color = "#115DFC",
    borderColor = "transparent",
    children = null,
}) {
    return (
        <Container
            size={size}
            color={color}
            borderColor={borderColor}
        >
            {children}
        </Container>
    )
}

Circle.propTypes = {
    borderColor: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
}
