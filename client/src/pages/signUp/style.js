import styled from 'styled-components';

export const SignUp = styled.section`
    padding: 50px 0;
    padding-bottom: 500px;

    @media screen and (max-width : 520px) { 
        padding: 30px 0;
        padding-bottom: 450px;
    }

    .signUp {
        &_heading {
            text-align: center;
            margin-bottom: 25px;
        }
    }
`