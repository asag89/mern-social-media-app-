import styled from "styled-components";

const Container = styled.div`
width: 100%;

.wrapper{
    padding: 10px 0 !important;
    display: flex;
    flex-direction: row !important;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid var(--grey-1);
    margin-bottom: 5px;
    border-radius: 0;

    .icon{
        font-size: 1.6rem;
        width: 40px;
        cursor: pointer;
    }

    h2{
        text-transform: capitalize;
        width: calc(100% - 80px);
        text-align: center;
        font-size: 1.2rem;
        color: var(--dark-1);
        line-height: 30px;
        font-weight: 500;

    }
}
`

export default Container