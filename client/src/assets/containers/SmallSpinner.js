
import styled from "styled-components"

const Container = styled.div`
width: ${({ size }) => size};
height:  ${({ size }) => size};

border: 2px solid ;
border-color:${({ color }) => color};
border-bottom-color: transparent;
border-radius: 50%;
display: inline-block;
margin-right:${({ rightSide }) => rightSide ? "15px" : "0"} !important;
margin: auto;
animation: rotation 1s linear infinite;

    @keyframes rotation {
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
} 
`

export default Container