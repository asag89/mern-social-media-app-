import styled from "styled-components"

const Container = styled.div`
width: 80%;

.wrapper{
    width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    



    .title{
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 5px;
    }

}

.items{
    border: 1px solid var(--light-4);
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .item{
        width: 100%;
        height: auto;
        padding: 12px 8px;
        display: flex;
        align-items: center;

        .img-wrapper{
            width: 46px;
            height: 46px;
            margin-right: 10px;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }

        .content{
            width: calc(100% - 156px);
            display: flex;
            flex-direction: column;
                font-size: 14px;
            line-height: normal;

            .username{
                font-weight:500;
                margin-bottom: 3px;
            }

            .name{
                font-weight:400;
                color: var(--grey-2);
            }
        }

        .follow-container{
            width: 100px;
            
            .follow-btn{
                padding: 3px 0;
                height: 35px;
                width: 100%;
                border-radius: 10px;
                font-weight: 600;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;

            }

            .follow{
               background-color: var(--primary);
               color: var(--light-1);
            }

            .unfollow{
                color: var(--dark-2);
                background-color: var(--light-1);
                border: 1px solid var(--grey-2);

            }
        }

    }
}

@media(max-width: 820px) {
    .wrapper{
        width: 100%;
    }
}

@media(max-width: 562px) {
        width: 100%;
    }
`

export default Container