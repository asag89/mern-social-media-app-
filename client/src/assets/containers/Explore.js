import styled from "styled-components"

const Container = styled.div`
width: 82%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 70px;

.searchBar-container{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    padding-bottom: 15px;
}

.wrapper{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row !important;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2%;
    flex-wrap: wrap;
    margin: 0 auto;
} 

@media(max-width: 635px) {
    .wrapper{
        gap: 0;
    }
}
@media(max-width: 562px) {
        width: 100%;
}
`
export default Container