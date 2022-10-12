import React from 'react'
import PropTypes from "prop-types"
import { Container, Column, P, Title } from "./Card01.style"

export default function Card01({
    width = 300,
    height = 140,
    darkMode = false,
    title = 'Title',
    description = 'Description',
    image = 'https://images.sk-static.com/images/media/img/col6/20210824-165102-896968.jpg',
    imageAlt = 'Image Alt',
}) {

    return (
        <Container
            darkMode={darkMode}
            width={width}
            height={height}
        >
            <div><img width="70px" src={image} alt={imageAlt} /></div>
            <Column>
                <Title darkMode={darkMode}>{title}</Title>
                <P darkMode={darkMode}>{description}</P>
            </Column>
        </Container>
    )
}

Card01.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    darkMode: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}
