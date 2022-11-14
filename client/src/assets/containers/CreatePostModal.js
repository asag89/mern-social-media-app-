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
        width: 53vw;
        min-width: 30vw;
        height: 70vh !important;
        background-color: var(--light-1);
        border-radius: 10px;
        overflow: hidden;




        .modal-1{
            height: 300px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;

            .modal-1-header{
                width: 100%;
                text-align: center;
                font-size: 1.2rem;
                padding: 10px 0;
                margin-bottom: 40px;
                border-bottom: 1px solid var(--grey-1);
            }


            .icon{
                font-size: 6rem;
                margin-top: 10px;
            }
           
            .text{
                font-size: 1.2rem;
                font-weight: 300;
                margin-top: 15px;

            }
            .btn{
                width: 160px;
                margin-top: 15px;
                color: var(--light-1);

                label{
                    width: 100%;
                    height: 100%;
                    padding: 10px 15px;
                    background-color: var(--primary);
                    border-radius: 5px;
                    cursor: pointer;
                }
            }

            .file-input{
                display: none;
            } 
        }

        /* phase 2 */
        .modal-2{
            height: 400px !important;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            .modal-2-top{
                width: calc(100% -30px) ;
                padding: 10px;

                display: flex;
                justify-content: space-between;
                align-items: center;

                


                .back-icon{
                    font-size: 1.6rem;
                    cursor: pointer;
                }

                h2{
                    width: calc(100% - 80px);
                    text-align: center;
                    font-size: 1.2rem;
                    line-height: 30px;
            }
                .btn-share-top{
                    color: var(--primary);
                    padding: 8px;

                }

            }

            .content{
                width: 100%;
                height: 88%;
                display: flex;
                justify-content: flex-start;
                align-items: center;


                .post-img-container{
                    position: relative !important;
                    background-color: var(--dark-3);

                    width: 50% !important;

                    &::after{
                        content: "" !important;
                        display: block !important;
                        padding-bottom: 100% !important;
                    }

                       
                    .img{
                        position: absolute !important;
                        width: 100% !important;
                        height: 100% !important;
                        object-fit: contain !important;
                        object-position: 50% 50% !important;
                    }
                }

                .form-container{

                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    width: 50%;
                    height: 100%;

                    .header{
                        width: calc(100% - 40px);
                        display: flex;
                        align-items: center;
                        margin: 10px 20px;

                        .user-photo-container{
                            width: 50px;
                            height: 50px;
                            margin-right: 10px;

                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                                object-fit: cover;
                            }
                        }

                        .username{
                            font-weight: 600;
                        }
                    }

                    .form{
                        display: flex;
                        flex-direction: column;
                        margin: 0 20px;
                        width: calc(100% - 40px);
                        height: 80%;

                        .form-grp{
                            width: 100%;
                            height: 90%;
                            overflow: hidden;

                            textarea{
                                overflow: auto;
                                border: none;
                                outline: none;
                                width: 100% !important;
                                padding: 0;
                                font-size: 1.1rem;
                                height: 100% !important;
                                resize: none;
                                
                                &::placeholder{
                                    color: var(--grey-1);
                                }
                            }
                        }
                    }
                    .btn-share-container{
                        display: none;
                    }
                }

            
            }
            

            
        }
    }

    @media(max-width: 1270px) {
        .modal{
            width: 690px !important;
        }
    }

        @media(max-width: 840px) {
            .modal{
                width: 500px !important;
                overflow-y: auto !important;
                min-height: 70vh;
                height: auto !important;

            }
            .btn-share-top{
            visibility: hidden;
        }

        .content{
            flex-direction: column;

            .post-img-container{
                width: 75% !important;
            }

            .form-container{
                width: 75% !important;

        
                

                .header ,.form{
                    margin: 10px 0 0 !important;
                    width: 100% !important; 
                }

                textarea{
                    min-height: 120px;
                    max-height: 300px;
                    font-size: .9rem !important;
                }

                textarea::-webkit-scrollbar {
                    width: 3px;
                }

                textarea::-webkit-scrollbar-thumb {
                    background-color: var(--grey-1);
                    border-radius: 10px;
                }



                .btn-share-container{
                        display: block !important;
                        width: 100%;
                        margin: 20px 0;
                        text-align: end;
                        
                        button{
                            background-color: var(--primary);
                            padding: 8px 18px;
                            border-radius: 5px;
                            color: var(--light-1);
                        }
                    }
            }
    }
    }



    @media(max-width: 562px) {
        .modal{
            width: 100vw !important;
            height: 100vh !important;
            border-radius: 0;
        }

        .modal-1{
            margin-top: 55px;
        }
        .modal-1-header{
            display: none;
        }

        .modal-2-top{
            justify-content: flex-start !important;
            padding: 10px 0 !important;

            .back-icon{
                width: 40px;
            }
        }
        .btn-share-container{
            margin-bottom: 80px !important;
        }
    }
`

export default Container