import React from 'react'
import { ButtonStyle } from './style'
import Spinner from 'react-bootstrap/Spinner';

const Index = ({ loading, text }) => {

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