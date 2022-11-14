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
    width: 500px;
    height: 52vh;
    background-color: var(--light-1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .wrapper{
        width: 80%;
        margin-top: 20px;

        h2{
        font-size: 1.2rem;
        font-weight: 600;
        padding-bottom: 8px;

        }

        .desc{
            text-align: center;
        }

        .color-danger{
            color: var(--red-1);
            font-weight: 600;
            padding: 5px 0;
        }

        input{
                outline: 2px solid var(--red-3);
                padding: 10px 10px;
                border-radius: 5px;
                width: 100%;
                font-size: 1rem;

                &:focus{
                    outline-color: var(--red-1);
                }
        }

        .btn-container{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 25px;

            .btn{
                padding: 12px 30px;
                border-radius: 20px;
                color: var(--light-1);
                transition: 1s;

            }

            .btn-cancel{
                background-color: var(--grey-3);

                &:hover{
                background-color: var(--dark-2);

                }

            }
            .btn-delete{
                background-color: var(--red-2);
                
                &:hover{
                background-color: var(--red-1);

                }

                &:disabled{
                background-color: var(--red-3);

                }
            }
        }
    }
}

@media(max-width: 562px) {

.modal{
    width: 100vw !important;
    height: 100vh !important;

.wrapper{
    margin-top: 80px;
}
}

}
`

export default Container