import styled from "styled-components"

const Container = styled.article`
width: 530px;
height: auto;

.settings{
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;
    margin-bottom: 50px;

    .settings-item{
        display: flex;
        align-items: center;
        width: 100%;
        height: auto;
        margin-top: 25px;

        .aside{
            width: 20%; 
            display: flex;
            justify-content: flex-end;
         



            .img-container{

                width: 52px;
                height: 52px;
                margin-right: 30px;

                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }

            .title{
                font-size: .9rem;
                font-weight: 500;
                width: auto;
                margin-right: 30px;
                text-align: right;
                word-wrap: break-word;
                word-break: keep-all;

            }



        }

        .content{
            width: 80%;

            h1{
                font-size: 1.2rem;
                font-weight: 500;
                color: var(--dark-1);
            }

            input{
                outline: 1px solid var(--grey-4);
                padding: 10px 10px;
                border-radius: 5px;
                width: 100%;
                font-size: 1rem;

                &:focus{
                    outline:2px solid  var(--dark-2);
                }
            }
            .err{
                color: var(--red-1);
            }

            .btn-submit{
                width: auto;
                border-radius: 6px;
                padding: 10px 15px;
                background-color: var(--primary);
                color: var(--light-1);

                &:disabled{
                background-color: var(-blue-2);
                cursor: initial;
                    
                }
            }

            .forgot{
                color: var(--primary);
                font-size: .9rem;
            }
        }


        

        
    }
}
@media(max-width: 940px) {

width: 100% !important;

.content{
    width: 70% !important;
}
.aside{
    width: 30% !important;
    justify-content: flex-start !important;


    .title{
        text-align: left !important;
    }

}
}

`

export default Container