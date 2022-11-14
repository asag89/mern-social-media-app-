import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
background-color: var(--modal-bg);
display: flex;
justify-content: center;
align-items: center;
z-index: 100;

.modal{
    width: 360px;
    height: auto;
    background-color: var(--light-1);
    border-radius: 15px;

    

    .wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .item{
            width: 100%;
            text-align: center;
            padding: 10px 0;
            font-size: 14px;
            color: var(--dark-1);
            border-bottom: 1px solid var(--grey-1);
            cursor: pointer;

            &:last-child{
                border: none;
            }
            
            }

            .danger{
                color: var(--red-1) !important;
                font-weight: 600;
            }
    }

    
}

@media(max-width: 562px) {
    .modal{
        width: 100vw !important;
        height: 100vh !important;
        border-radius: 0;
    }
}
`

export default Container