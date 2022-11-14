import styled from "styled-components"

const Container = styled.section`
width: 300px;
display: flex;
flex-direction: column;


.user-container{
    width:100% ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;

    .user{
        display: flex;
        align-items: center;

        .user-img-container{
            width: 55px;
            height: 55px;
            margin-right: 10px;
            
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }

        .user-content{
            display: flex;
            flex-direction: column;
            justify-content: center;

            a{
                font-size: 14px;
                font-weight: 600;
                color: var(--dark-1);
            }

            p{
                font-size: 14px;
                color: var(--grey-1);
            }
        }
    }

    .switch{
        font-size: .8rem;
        color: var(--primary);
        font-weight: 600;
        cursor: pointer;
    }
}


.suggestion-container{
    width: 100%;
    display: flex;
    flex-direction: column;

    .suggestion-top{
        display: flex;
        justify-content: space-between;
        font-size: .9rem;
        margin-bottom: 8px;
        
        div{
            color: var(--grey-2);
            font-weight: 600;
        }

        a{
            font-weight: 600;
            color: var(--dark-1);
            font-size: .8rem;
        }
    }

    .suggestions{
        display: flex;
        flex-direction: column;

        .suggestion-item{
            display: flex;
            color: var(--dark-1);
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 10px;

            .suggestion-item-img-container{
            width: 45px;
            height: 45px;
            margin-right: 10px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }
            }

            .suggestion-item-username{
                width: calc(100% - 115px);
                font-weight: 700;
                font-size: .9rem;
            }

            .follow{
                width:60px;
                color: var(--primary);
                font-weight: 600;
                font-size: .8rem;
                text-align:right;

                }
            
            }

        }
    }

    @media(max-width: 1020px) {

        display: none;
    }
`

export default Container