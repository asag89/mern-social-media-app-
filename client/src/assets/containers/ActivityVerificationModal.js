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
    width: 420px;
    height: auto;
    background-color: var(--light-1);
    border-radius: 10px;


    .content{
        margin: 40px 0 30px;
        width: 100%;

        h3{
            font-weight: 500;
            text-align: center;
            margin: 0 auto 5px;
            color: var(--dark-1);

        }
        p{
            
            color: var(--grey-1);
            text-align: center;
            margin: 0 40px;
            font-size: 14px;
            font-weight: 400;
            line-height: 140%;

        }
    }

    .btn-container{
        width: 100%;

        button{
            border-top: 1px solid var(--grey-4);
            height: 50px;
            padding: 5px;
            width: 100%;
            color: var(--dark-2);
        }

        .btn-confirm{
            color: var(--primary);
            font-weight: 600;
            font-size: 14px;
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