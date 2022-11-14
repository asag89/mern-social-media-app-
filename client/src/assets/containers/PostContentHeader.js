import styled from "styled-components"

const Container = styled.header`

width: 100%;
display: flex;
height: 67px;
border-bottom: 1px solid var(--grey-4);
background-color: var(--light-1);

.user-info{
    width: calc(100% - 46px);
    display: flex;
    height: 67px;
    align-items: center;
    padding: 12px 20px;

    .img-container{
        width: 43px !important;
        height: 43px !important;
        background-color: var(--light-1) !important;
        margin-right: 10px;

        img{
            width: 43px !important;
            height: 43px !important;
            object-fit: cover;
            border-radius: 50%;
        }
    }


    .username{
        font-size: 14px;
        font-weight: 500;
    }
}

.more{
    width: 46px;
    height: 43px;
    margin: 12px 6px;


    .icon{
        width: auto;
        padding: 12px;
        font-size: 2.8rem;
    }
}
            
`

export default Container