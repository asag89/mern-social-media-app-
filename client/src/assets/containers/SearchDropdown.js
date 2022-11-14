import styled from "styled-components"

const Container = styled.div`

        width: 375px;
        overflow: auto !important;

        height: 400px;
        position: absolute;
        right: -60px;
        top: 52px;
        background: var(--light-2);
        z-index: 10;
        border-radius: 6px;
        border: 1px solid var(--grey-4);

        &::-webkit-scrollbar {
                    width: 5px;
                }

        &::-webkit-scrollbar-thumb {
            background-color: var(--grey-3);
            border-radius: 10px;
        }

        .dropdown{
            width: 100%;
            height: 100%;

        }

        .center-wrapper{
            width: 100%;
            height: calc(100% - 40px);
            display: flex;
            justify-content: center;
            align-items: center;
        }


        .top{
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            padding: 10px 12px 0;


            h4{
                color: var(--dark-1);
            }

            .btn-clear{
                color: var( --primary);
                font-weight: 600;
            }
        }

        .recent-search-items{
            display: flex;
            flex-direction: column;
            width: 100%;


            .recent-search-item{
                width: 100%;
                margin: 12px 0;

                .navigate{
                    width: 100%;
                    cursor: pointer;
                    
                    .wrapper{
                        width: 100%;
                        padding: 8px 12px;
                        display: flex;
                        flex-direction: row !important;
                        justify-content: flex-start !important;
                        align-items: center !important;
                        gap: 0;


                        .img-wrapper{
                            width: 46px;
                            height: 46px;
                            margin-right: 15px;

                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                                object-fit: cover;
                            }
                        }

                        .user-info{
                            width: calc(100% - (61px + 10%));
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            line-height: normal;

                            .username{
                                font-weight: 600;
                                font-size: 16px;
                            }

                            .name{
                                font-weight: 400;
                                color: #9c9b9b;
                                font-size: 16px;


                            }
                        }

                        .btn-container{
                            width: 10%;
                            .btn-remove{
                                width: 100%;
                                font-size: 1.6rem;
                                color: var(--grey-1);
                            }
                        }
                    }
                }    
            }
        }

        @media(max-width: 562px) {
            width: 100% !important;
            border: 2px solid #413f3f;
            box-shadow: 5px 55px 47px 19px var(--box-shadow-1);
            -webkit-box-shadow: 5px 55px 47px 19px var(--box-shadow-1);
            -moz-box-shadow: 5px 55px 47px 19px var(--box-shadow-1);
            right:  0;
            
            .user-info{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: normal;

                .username{
                    font-weight: 600;
                    font-size: 16px;
                }

                .name{
                    font-weight: 400;
                    color: var(--grey-1);
                    font-size: 16px;
                }
            }
    }
`

export default Container