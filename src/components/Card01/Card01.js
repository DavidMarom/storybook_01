import React from 'react'
import PropTypes from "prop-types"
import { Container } from "./Card01.style"

export default function Card01({ width = 100, height = 50, darkMode = false, title }) {

    return (
        <Container darkMode={darkMode} width={width} height={height} >
            <p>{title}</p>
        </Container>
    )
}

Card01.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    darkMode: PropTypes.bool,
    title: PropTypes.string,
}

