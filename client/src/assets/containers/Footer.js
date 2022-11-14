import styled from "styled-components"

const Container = styled.footer`

margin-top: 20px;
color: var(--grey-1);
font-size: 12px;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;

span{
    cursor: pointer;
}

/* media queries */
@media(max-width:480px) {
    &{
        padding: 10px 15px;
        margin-top: 10px;


        span{
            font-size:.7rem;
        }
    }
}

`
export default Container