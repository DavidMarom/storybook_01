import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Container, Knoba, Knobb, Symb, Symbol } from "./Toggle.style"

export default function Toggle({ color="#0077ff", func, onSymbol, offSymbol }) {
    const [toggle, setToggle] = useState(false)

    return (
        <Container onClick={() => { setToggle(!toggle); func() }}>
            <Symb>
                <Symbol>
                    {toggle ? onSymbol : offSymbol}

                </Symbol>
            </Symb>
            {toggle ? <Knoba color={color} /> : <Knobb />}
        </Container>
    )
}

Toggle.propTypes = {
    color: PropTypes.string,
    func: PropTypes.func,
    onSymbol: PropTypes.string,
    offSymbol: PropTypes.string,
}
