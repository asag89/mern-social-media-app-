import styled from "styled-components"

const Container = styled.div`

            display: flex;
            align-items: flex-start;
            margin-bottom: 30px;
            width: auto;
            height: auto;

     

            aside{
                width: 20%; 
                margin: 6px 20px 0 0;


                .title{
                    font-size: 1rem;
                    font-weight: 500;
                    width: 100%;
                }
            }

            

            .content{
                color: var(--grey-1);
                width: 80%; 


                .input{
                    outline: 1px solid var(--grey-4);
                    padding: 10px 10px;
                    border-radius: 5px;
                    width: 100%;
                    font-size: 1rem;

                    &:focus{
                        outline:2px solid  var(--dark-2);
                    }
                }

                .textarea{
                    resize: horizontal;
                    width: 100% !important;
                    resize: vertical;
                    min-height: 100px;
                    max-height:500px;
                    border-radius: 5px;

                }

                .desc{
                    margin-top: 10px;
                    font-size: .8rem;

                }

                .btn-submit{
                    width: 70px;
                    border-radius: 6px;
                    padding: 10px 0;
                    background-color: var(--primary);
                    color: var(--light-1);

                    &:disabled{
                        background-color: var(--blue-2);
                        cursor: initial;   
                    }
                }
            }

            .img-container{
                width: 56px;
                height: 56px;

                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }

            .file-label{
                color: var(--primary);
                cursor: pointer;
                font-weight: 400;
            }

            .file-input{
                display: none;
            }
        
`
export default Container