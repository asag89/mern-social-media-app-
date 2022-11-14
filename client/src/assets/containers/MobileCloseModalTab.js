import styled from "styled-components";

const Container = styled.div`
width: 100%;
  z-index: 500;
.wrapper{
  padding: 10px 0;
  display: flex;
  flex-direction: row !important;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--grey-1);
  margin-bottom: 5px;
 

  .icon{
      font-size: 1.6rem;
      width: 40px;
      cursor: pointer;
  }

  h2{
      text-transform: capitalize;
      width: calc(100% - 80px);
      text-align: center;
      font-size: 1.2rem;
      color: var(--dark-1);
      font-weight: 500;
      line-height: 30px;
  }
}
`

export default Container