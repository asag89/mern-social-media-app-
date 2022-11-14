import styled from "styled-components"


const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-size: 16px;

.wrapper{
    width: 100%;
    padding-bottom: 10px;
    border-radius: 30px;
    
    .img-wrapper{
        width: 25%;

        img{
            width: 100%;
            height: auto;
        }
    }
    p{
        text-align: center;
        margin-bottom: 15px;

    }
}
a{
    font-weight: 700;
    padding: 5px 15px;
    background-color: var(--primary);

    color: var(--light-1);
    border-radius: 10px;
}
`

export default Container