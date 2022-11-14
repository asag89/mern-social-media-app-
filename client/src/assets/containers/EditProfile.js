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
   }

   @media(max-width: 940px) {
       width: 100% !important;
   }
`

export default Container
