import styled from "styled-components"

const Container = styled.div`
width: 820px;
display: flex;
justify-content: space-between;
margin-left: 10px;

@media(max-width: 955px) {
    justify-content: flex-end;
}
@media(max-width: 940px) {
    flex-direction: column;
    align-items: center !important;
    justify-content: flex-start;
    margin-top: 10px;
    

    width: 80%;

}

@media(max-width: 562px) {

    

    width: 100%;
    margin: 0;
}




`
export default Container