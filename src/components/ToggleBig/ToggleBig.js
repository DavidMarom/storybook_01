import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Container, Knoba, Knobb } from "./ToggleBig.style"

function ToggleBig({ color }) {
    const [toggle, setToggle] = useState(true)
    return (
        <Container onClick={() => setToggle(!toggle)}>
            {toggle ? <Knoba color={color} /> : <Knobb />}
        </Container>
    )
}

ToggleBig.propTypes = {
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    color: PropTypes.string
}

export default ToggleBig