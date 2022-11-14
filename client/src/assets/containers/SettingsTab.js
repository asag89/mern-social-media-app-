import styled from "styled-components"

const Contanier = styled.div`
width: auto;
display: flex;
flex-direction: column;
margin-right: 30px;
margin: 0 auto;

border: 1px solid var(--grey-4);


.tabItem{
    width: auto;
    color: var(--dark-2);
    margin-left: -1px;
    padding: 15px 45px;
    font-weight:500;
    font-size: 14px;
    border-left: 2px solid transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover{
    border-left: 2px solid var(--grey-2);
    background-color: var(--light-3);

    }
}   

.active {
    color: var(--dark-1);
    border-left: 2px solid var(--dark-1) !important;
}


@media(max-width: 955px) {
    margin-right: 15px;
}

@media(max-width: 940px) {
    width: 100%;
    border-color: var(--grey-1);
    margin-right: 0;

    .tabItem:hover{
        background-color: var(--light-4);
        border-left: 2px solid var(--dark-2);
    }
}

`
export default Contanier