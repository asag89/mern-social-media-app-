import styled from "styled-components"

const Container = styled.div`
position: fixed;
bottom: 0;
width: 100vw;
background-color: var(--light-3);
height: 50px;
z-index: 32;
border-top: 1px solid var(--grey-4);

.wrapper{
    width: 100%;
    display: flex;
    flex-direction: row !important;
    height: 100% !important;

    .item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        height: 100%;
        font-size: 1.3rem;

        .link{
            width: 100%;
            cursor: pointer;
        }

        .img-wrapper{
            width: 26px;
            height: 26px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }      
        }

        & > * {
            display: flex;
            justify-content: center;
            align-items: center;   
            }
    }
}

`

export default Container