import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { ButtonStyle } from './style'

const Index = ({ loading, text }) => {
    console.log('loading', loading)

    return (
        <ButtonStyle>
            {loading && <Spinner
                as="span"
                size="sm"
                role="status"
                animation="border"
                aria-hidden="true"
            />}
            {text}
        </ButtonStyle>
    )
}

export default Index