import PropTypes from "prop-types"
import { WelcomeContainer } from "./Welcom.style"

function Welcome({name}) {

    return (
        <WelcomeContainer>
            <h1>Design System</h1>
            <p>My design system is based on styled components.</p>
            <p>It is fully responsive and supports dark mode</p>
        </WelcomeContainer>
    )
}

Welcome.propTypes = {
    name: PropTypes.string
}

export default Welcome