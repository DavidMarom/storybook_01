import PropTypes from "prop-types"
import { Container } from "./Button.style"

function Button({ label, backgroundColor = "red", size = "md", onClick }) {
    let scale = 1
    if (size === "sm") { scale = 0.75 }
    if (size === "lg") { scale = 1.5 }
    const style = {
        backgroundColor,
        border: "none"

    }
    return (
        <button onClick={onClick} style={style}>
            <Container a1={500}>
                {label}
                {scale}
            </Container>
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onclick: PropTypes.func,
}

export default Button