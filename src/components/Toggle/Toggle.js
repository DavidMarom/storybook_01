import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Container, Knoba, Knobb } from "./Toggle.style"

function Toggle({ backgroundColor = "red", onClick }) {
    const [toggle, setToggle] = useState(true)


    return (
        <Container onClick={() => setToggle(!toggle)} >
            {toggle ? <Knoba /> : <Knobb />}
        </Container>
    )
}

Toggle.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onclick: PropTypes.func,
}

export default Toggle