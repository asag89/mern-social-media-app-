import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
background-color: var(--modal-bg);
display: flex;
justify-content: center;
align-items: center;
z-index: 26;

.modal{
    width: 380px;
    height: 75vh;
    background-color: var(--light-1);
    border-radius: 10px;

    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid var(--grey-3);
        margin-bottom: 10px;

        .placeholder{
            width: 50px;
            visibility: hidden;

        }

        .title{
            width: calc(100% - 100px);
            padding: 8px 0;
            text-align: center;
            font-weight: 500;
            color: var(--dark-2);
            font-size: 1.1rem;
            text-transform: capitalize;
        }

        .close-btn{
            width: 50px;
            font-size:1.8rem;
        }
    }

    
    .wrapper{
      
        height:calc(100% - 78px);
   

        .list{
            width: 100%;
            height: auto;
            overflow: auto;

            .item{
                width: 100%;
                height: auto;
                padding: 10px 15px;
                display: flex;
                align-items: center;


                .img-wrapper{
                    width: 43px;
                    height: 43px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-right: 15px;

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }

                .user-info{
                    display: flex;
                    flex-direction: column;
                    width: 140px;
                    

                    .username{  
                        color: var(--dark-1);
                        line-height: normal;
                    }

                    .name{
                        color: var(--grey-1);
                        line-height: normal;

                    }
                }

                .btn-outline{
                    margin-left: auto;
                    padding: 7px 0;
                    width: 90px;
                    border: 1px solid var(--grey-4);
                    
                    color: var(--dark-1);
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: .8rem;
                }
                .btn-f{
                    margin-left: auto;
                    padding: 3px 0;
                    height: 30px;

                    width: 90px;
                    
                    background-color: var(--primary);
                    color: var(--light-1);
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: .8rem;
                }
            }
        }
    }
}

@media(max-width: 562px) {
    .modal{
        width: 100% !important;
        height: 100%;
        border-radius: 0;
    
    }
}
`

export default Container