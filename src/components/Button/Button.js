import PropTypes from "prop-types"
import { Button2 } from "./Button.style"

function Button({
    label,
    backgroundColor = "#3576cc",
    width,
    size = "small",
    rounded = false,
}) {

    return (
        <Button2
            onClick={()=>{console.log("Button Pressed")}}
            backgroundColor={backgroundColor}
            width={width}
            size={size}
            rounded={rounded}
        >
            {label}
        </Button2>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.number,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    rounded: PropTypes.bool
}

export default Button