import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Container, Knoba, Knobb } from "./Toggle.style"

function Toggle({ color }) {
    const [toggle, setToggle] = useState(true)
    return (
        <Container onClick={() => setToggle(!toggle)}>
            {toggle ? <Knoba color={color} /> : <Knobb />}
        </Container>
    )
}

Toggle.propTypes = {
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    color: PropTypes.string
}

export default Toggle