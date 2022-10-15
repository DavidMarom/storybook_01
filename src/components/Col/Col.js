import PropTypes from "prop-types"
import { ColContainer } from "./Col.style"

function Col({ children,
    height = 300,
    center
}) {

    return (
        <ColContainer
            center={center}
            height={height}
        >
            {children.map(child => child)}

        </ColContainer>
    )
}

Col.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number,
    center: PropTypes.bool
}

export default Col