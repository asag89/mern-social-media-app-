import styled from "styled-components"

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;


.menu-item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 55px;
    font-size: .9rem;
    font-weight: 500;
    color: var(--grey-1);
    border-top:1px solid var(--grey-3);

    &:last-child{
        margin: 0;
    }
    span{
        margin-left: 5px;
        text-transform: uppercase;
    }
}
.active{
        border-top:1px solid var(--dark-3);
        color: var(--dark-3);
        
    }

@media(max-width: 962px) {
width: 95% !important;




}

`

export default Container