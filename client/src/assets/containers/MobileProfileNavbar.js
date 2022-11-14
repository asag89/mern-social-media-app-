import styled from "styled-components"

const Container = styled.div`

width: 100vw;
display: flex;
top: 0;
position: fixed;

.wrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center !important;
    background-color: var(--light-1);
    border-bottom: 1px solid var(--grey-2);
    padding: 12px 15px;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon{
        font-size: 1.6rem;
        cursor: pointer;
    }

    h1{
        font-size: 18px;
        font-weight: 500;
        line-height: 30px;
    }
}

`

export default Container