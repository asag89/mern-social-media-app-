import styled from "styled-components"

const Container = styled.div`
width: 100%;

.wrapper{
    width: 100%;

    div{
        font-size: 18px;
        font-weight: 600;
    }

    .img-wrapper{
        width: 50%;

        img{
            width: 100%;
            height: auto;

        }
    }

    a{
        margin-top: 20px;
        padding: 5px 20px;
        background-color: var(--primary);
        color: #fff;
        border-radius: 20px;
    }
}

`
export default Container