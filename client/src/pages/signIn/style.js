import styled from 'styled-components';

export const SignIn = styled.section`
    padding: 100px 0;
    padding-bottom: 500px;

    @media screen and (max-width : 520px) { 
        padding: 50px 0;
        padding-bottom: 450px;
    }

    .signIn {
        &_heading {
            text-align: center;
            margin-bottom: 25px;
        }
    }
`