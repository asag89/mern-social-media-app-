import styled from "styled-components";


const Container = styled.div`
width: 180px;
height: auto;
background: var(--light-2);
position: absolute;
right: -10px;
top: 40px;
border: 1px solid var(--grey-4);
border-radius: 5px;

.items{
    width: 100%;
    display: flex;
    flex-direction: column;

    a{
        width: 100%;

        &:last-child{
            border-top: 1px solid var(--grey-4);
        }

        .item{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px;
        color: var(--dark-1);



        .icon{
            width: 15%;
            font-size: 1.1rem;
            
        }

        .text{
            width: 85%;
            font-size: 14px;
            margin-left: 10px;
        }
    }
    }
    
}

`

export default Container