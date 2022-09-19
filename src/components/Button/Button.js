import PropTypes from "prop-types"
import { Container } from "./Button.style"

function Button({ label, backgroundColor = "red", onClick }) {
    
    const style = {
        backgroundColor,
        border: "none"
    }
    return (
        <button onClick={onClick} style={style}>
            <Container a1={500}>
                {label}
            </Container>
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    onclick: PropTypes.func,
}

export default Button