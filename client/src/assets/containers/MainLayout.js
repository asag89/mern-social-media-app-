import styled from "styled-components"

const Container = styled.div`
width: 100%;
padding: 0 20px;
height: auto;

.wrapper{
    max-width: 1100px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main{
    width: 100%;
    height: auto;
    min-height: 100vh;
    margin-top: 100px;
    margin-top: ${({ page }) => page === "mobile" ? "0px" : "100px"};
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
}

@media(max-width: 1270px) {
    .main{
        justify-content: center;
        padding: 0;

    }
}

@media(max-width: 770px) {
    padding: 0 10px;

}

`
export default Container