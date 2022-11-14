import styled from "styled-components"

const Container = styled.div`
width: 820px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 80px !important;

@media(max-width: 962px) {
    width: 90%;
}

@media(max-width: 562px) {
    width: 100%;
}
`

export default Container