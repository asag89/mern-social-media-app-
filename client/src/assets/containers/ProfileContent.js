import styled from "styled-components";

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom:60px;
height: auto;

.img-container{
    width: 160px;
    height: 160px;
    margin-right: 60px;

    img{
        width: 160px;
        height: 160px;
        border-radius: 50%;
        object-fit: cover;
    }
}

.content-container{
    display: flex;
    flex-direction: column;
    width: 100%;

    .content-top{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        width: 100%;
        

        .username{
            padding-right:10px ;
            font-weight: 400;
        }
        a{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .btn-edit{
            border: 1px solid var(--grey-4);
            font-weight: 600;
            color: var(--dark-1);
            border-radius: 5px;
            margin-right: 8px;

            a{
                width: 100%;
                height: 100%;
                padding: 8px 14px;

            }
        }

        .settings-icon{
            font-size: 1.4rem;
            cursor: pointer;
        }
    }

    .content-stats{
        display: flex;
        margin-bottom: 20px;
        width: 100%;
        align-items: center;


        .content-stats-item{
            margin-right: 25px;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            line-height: normal !important;

            .stats-count{
                font-weight: 600;
                margin-right: 4px;
            }
        }
        
    }

    .user-info{
        display: flex;
        flex-direction: column;
        width: 100%;

        .name{
            font-weight: 600;
        }

        .bio{
            font-size: .9rem;
            margin: 5px 0;
        }

        .website{
            color: var(--blue-1);
            font-weight: 600;
        }
        
    }
    

}

@media(max-width: 962px) {
    width: 85% !important;

    flex-direction: column;
    align-items: center;


    .img-container{
        margin-right: 0;
        margin-bottom: 20px;
    }

  
    .content-top,.content-stats{
        justify-content: center;
    }
    .username{
        font-size: 18px;
    }

    .content-stats{
        margin-top: 10px;
    }
    .content-stats-item{
        flex-direction: column;
        align-items: center;
        margin-right: 0 !important;
        width: 33%;
        color: var(--dark-1);

        .stats-count{
                padding-bottom: 8px;
                color: var(--dark-3);
            }

    }

    .user-info{
        border-top: 1px solid var(--grey-3);
        padding-top: 15px;
    }

    @media(max-width: 562px) {

        .settings-icon{
            display: none;
        }
        margin-top: 100px;

    }

}

`

export default Container