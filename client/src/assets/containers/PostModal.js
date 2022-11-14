import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
background-color: var(--modal-bg);
display: flex;
justify-content: center;
align-items: center;
z-index: 26;

.modal{
    width: auto;
    max-width: 900px;
    height: 85vh;
    background-color: var(--light-1);

    .wrapper{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start !important;
        align-items: center;

        .img-container{
            width: auto;
            max-width: 400px;
            height: 100%;
            display: flex;
            align-items: center;
            background-color: var(--dark-3);

            img{
                width: auto;
                max-width: 100%;
                height: auto;
                max-height: 100%;
            }
        } 
    }
}

@media(max-width: 562px) {

    .modal{
        width: 100vw !important;
        height: 100vh !important;
    }

}

`
export default Container