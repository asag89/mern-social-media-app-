import styled from "styled-components"

const Container = styled.div`
width: 100%;
border-top: 1px solid var(--light-4);
padding: 12px 5px;

form{
    display: flex;
    align-items: center;

    .btn-svg{
        margin-right: 11px; 
    }

    textarea{
        border: none;
        overflow: auto;
        outline: none;
        width: 100% !important;
        padding: 0;
        font-size: 1.1rem;
        resize: none;
        overflow-wrap: break-word;
        height: 25px;
        background-color: transparent;
        font-size: .9rem;
        margin-right: 9px;
    }

    .btn-submit{
        color: var(--primary);
        font-weight: 600;

        &:disabled{
            color: var(--blue-2);
        }
    }

    .post-create-comments{
    padding:3px 5px;
    display: flex;
    justify-content: space-between;

    input{
        width: 80%;
        padding: 10px 0;
        background-color: transparent;
    }

}
}
`

export default Container