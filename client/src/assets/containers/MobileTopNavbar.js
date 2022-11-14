import styled from "styled-components"

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: var(--light-1);
    height: 70px;
    border-bottom: .5px solid var(--grey-2);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo{
        font-size: 3rem;
        font-weight: 500;
        padding-top: 12px;
        font-family: "Italianno";
    }

`
export default Container