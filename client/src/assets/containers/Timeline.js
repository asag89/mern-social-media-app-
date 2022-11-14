import styled from "styled-components"

const Container = styled.section`
height: auto;
width: 485px;
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: 1270px) {
    margin: 0 30px;
}

@media(max-width: 1020px) {
    margin: 0 15px !important;
}

@media(max-width: 670px) {
    margin: 0 !important;
}

@media(max-width: 670px) {
    width: 80%;
}

@media(max-width: 562px) {
    width: 100%;
    margin: 0;
    margin-bottom: 50px !important;
}

`

export default Container