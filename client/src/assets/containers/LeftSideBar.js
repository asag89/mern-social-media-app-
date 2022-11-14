import styled from "styled-components"

const Container = styled.nav`
width: 180px;
height: auto;

.wrapper{
    width: inherit;

    height: auto !important;
    position: fixed;

    

    .tab{
        width: inherit;
        display: flex;
    flex-direction: column;
    align-items: center !important;
        height:65vh;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--grey-1);
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: var(--grey-3);
        }

        &::-webkit-scrollbar-track {
            background-color: transparent;
            margin-block: 2px;

        }
    }

    .navLink{
        height: 60px;
        color: var(--dark-1);
        width: 100%;
        display: flex;
        align-items: center;

        .navLink-content{
        width: 100%;

            padding: 15px 25px 15px 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .item-text{
                padding-left: 20px;
                font-size: 1rem;
                font-weight: 500;
            }
        }
    }

}

@media(max-width: 1270px) {

    margin-right: 10px;
    
        width: 60px;
    
    .item-text{
        display: none;
    }

    .navLink-content{
        padding: 12px !important;
        justify-content: center !important;

    }
}

@media(max-width: 670px) {

    
        /* width: 50px; */
    
    .navLink-content{
        justify-content: center;
        padding: 12px 0 !important;
    }

}

@media(max-width: 562px) {

display: none;

}


`
export default Container