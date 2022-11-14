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
    display: flex;
    width: 400px;
    height: auto;
    flex-direction: column;
    background-color: var(--light-1);
    border-radius: 10px;

    .item{
        width: 100%;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid var(--grey-4);
        font-size: 14px;

        .icon-arrow{
            display: none;
        }
    }

}

@media(max-width: 562px) {
    .modal{
        width: 100% !important;
        height: 100%;
        border-radius: 0;

        .item{
    
            justify-content: space-between;
            
            .red{
                color: var(--red-1);
            }

            .icon-arrow{
                display: inline-block;
                color: var(--grey-1);
            }
        }
    }
}
`

export default Container