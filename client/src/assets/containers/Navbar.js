import styled from "styled-components"

const Container = styled.nav`
position: fixed;
top: 0;
max-width: 1100px;
margin: 0 auto;
height: 70px;
display: flex;
width: 100%;
padding: 0 25px;
align-items: center;
justify-content: space-between;
border-bottom: .5px solid var(--grey-2);
z-index: 5;
background-color: var(--light-1);

.logo{
    font-size: 3rem;
    font-weight: 500;
    padding-top: 12px;
    font-family: "Italianno";
}

.right-container{
    display: flex;
    align-items: center;

}



.add-icon{
    width: 23px !important;
    height: 23px;
    margin-right: 20px;
    cursor: pointer;


}

.img-wrapper{
    width: 26px;
    height: 26px;
    position: relative;
    cursor: pointer;

    .user-avatar{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;

    }
}

@media(max-width: 670px) {
    padding: 0 10px;
}

`


export default Container