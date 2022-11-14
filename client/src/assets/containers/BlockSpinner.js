import styled from "styled-components"

const Container = styled.div`
width: 100vw !important;
height: 100vh !important;
background-color: var(--light-4);
color: var(--pink-1);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
    font-size: 3.6rem;
    font-weight: 500;
    font-family: "Italianno";
}

.footer{
    position: fixed;
    bottom: 20px;
    padding: 20px 0;
    height: auto;
    font-size: 1.2rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: var(--dark-3);
    font-weight: 600;

    h2{
        margin-top: 10px;
        font-size: 16px;
        font-family: "Italianno";
        font-weight: 500;
        font-size: 2rem;
       
        color: var(--pink-1);
}
}

`

export default Container