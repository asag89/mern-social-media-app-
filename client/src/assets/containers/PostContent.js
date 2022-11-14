import styled from "styled-components"

const Container = styled.div`
width: ${({ width }) => width};
height: 100%;
min-height: 200px;
overflow-y: auto;
overflow-x: hidden;
border-left: 1px solid var(--grey-4);



.content{
    width: 100% !important;
    height: 100%;
    display: flex;
    flex-direction: column;


    .header{
        width: 100%;

        display: flex;
        height: 67px;
        
        border-bottom: 1px solid var(--grey-4);
        background-color: var(--light-4);
     
        .user-info{
            width: calc(100% - 46px);
            display: flex;
            height: 67px;
            align-items: center;
            padding: 12px 20px;

            .img-container{
                width: 43px !important;
                height: 43px !important;
                background-color: transparent;
                margin-right: 10px;

                img{
                    width: 100%;
                    height: 100%;
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
    }






    .comments-container{
        width: 100%;
        height: calc(100% - 67px);
        padding: 12px 20px;
        height: 100%;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }
     

        .comment-top{
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: 22px;


            .img-container{
                width: 43px !important;
                height: 43px !important;
                background-color: transparent;
                margin-right: 10px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }
            }

            .content-container{
                display: flex;
                flex-direction: column;


                .user-info{
                height: auto;
                line-height: 18px;
           
                .username{
                    font-size: 14px;
                    font-weight: 500;
                    margin-right: 5px;
                }

                .post-comment{
                    font-weight: 400;
                    font-size: 14px;
                    color: var(--dark-2);
                    display: inline;

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
           
            }
            }


            
        }    
    } 
}   


@media(max-width: 562px) {
width: 100%;

}
`

export default Container