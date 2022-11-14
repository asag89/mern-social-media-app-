import styled from "styled-components"

const Container = styled.div`
width: 530px;
   height: auto;

   .wrapper{
       width: 100%;
       display: flex;
       height: auto;
       flex-direction: column;
       margin-bottom: 50px;

       .item{
           display: flex;
           align-items: flex-start;
           margin-bottom: 10px;
           width: 100%;
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
               color: var(--grey-3);
               width: 80%; 

               .desc{
                   margin-top: 10px;
                   font-size: .8rem;

                   .color-danger{
                       color: var(--red-1);
                       font-weight: 600;
                       font-size: 1rem;
                       padding-bottom: 5px;
                   }

               }

               .input{
                   outline: 1px solid var(--grey-4);
                   padding: 10px 10px;
                   border-radius: 5px;
                   width: 100%;
                   font-size: 1rem;

                   &:focus{
                       outline:2px solid  var(--dark-1);
                   }
               }

               .err-message{
                   color: var(--red-1);
                   padding: 5px 0;
                   font-size: 14px;
               }

               .btn-submit{
                   width: auto;
                   border-radius: 6px;
                   padding: 10px 15px;
                   background-color: var(--primary);
                   color: var(--light-1);
                   margin-top: 8px;

                   &:disabled{
                       background-color: var(--blue-2);
                       cursor: initial;   
                   }
               }
           }
       }
   }

   @media(max-width: 940px) {

       

width: 100% !important;

}
`

export default Container