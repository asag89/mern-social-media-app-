import styled from "styled-components"

const Container = styled.div`

width: 100%;
display: flex;
align-items: center;
margin-bottom: 22px;



&:last-child{
    margin-bottom: 10px;
}


& > div {
    width: 100%;
    display: flex;
    align-items: flex-start;



    .img-container{
        width: 43px !important;
        height: 43px !important;
        background-color: var(--light-1) !important;
        margin-right: 10px;

        img{
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .comment-main{
        display: flex;
        flex-direction: column;
        width: calc(100% - 45px);

        .user-info{
            height: auto;
            line-height: 18px;
            margin-right: 8px;

            .username{
                font-size: 14px;
                font-weight: 500;
                margin-right: 5px;
            }

            .comment-text{
                font-weight: 400;
                font-size: 14px;
                color: var(--dark-2);
                display: inline;
                overflow-wrap: break-word;
                word-break: break-word;
            }
        }

        .comment-info{
            display: flex;
            align-items: center;
            margin-top: 2px;

            .time-ago{
                font-size: 12px;
                font-weight: 400;
                color: var(--grey-1);
                margin-right: 12px;
            }
            .likes{
                font-size: 12px;
                font-weight: 600;
                color: var(--grey-1);
                margin-right: 12px;

            }


            .btn-reply{
                font-weight: 600;
                font-size: 12px;
                color: var(--grey-1);
                margin-right: 12px;

            }
        }
}
}

.comment-heart{
        margin-right: 3px;
        margin-left: 8px;


    }

`

export default Container