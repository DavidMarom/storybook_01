import PropTypes from "prop-types"
import { ColContainer } from "./Col.style"

function Col({ children,
    height,
    width,
    center = true,
    background
}) {

    return (
        <ColContainer
            center={center}
            height={height}
            width={width}
            background={background}
        >
            {children.map(child => child)}

        </ColContainer>
    )
}

Col.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number,
    width: PropTypes.number,
    background: PropTypes.string,
    center: PropTypes.bool
}

export default Col