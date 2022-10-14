import PropTypes from "prop-types"
import { WelcomeContainer } from "./Welcom.style"

function Welcome({name}) {

    return (
        <WelcomeContainer>
            <h1>Hi {name}</h1>
            <p>This is my design system. It is still in progress.</p>
            <p>Stay tuned...</p>
        </WelcomeContainer>
    )
}

Welcome.propTypes = {
    name: PropTypes.string
}

export default Welcome