import styled from "styled-components"

const Container = styled.div`


display: flex;
align-items: center;
width: 100%;
padding: 0 20px;
border-radius: 10px;
transition: .2s ease-in;
border: 1px solid var(--grey-4);
margin-bottom: 35px;
height: 80px;

&:hover{
    -webkit-box-shadow: 9px 8px 21px 5px var(--box-shadow-2); 
    box-shadow: 9px 8px 21px 5px var(--box-shadow-2);
}



& > div:first-child{
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.ago{
    font-weight: 600;
}

.techs{

}

.verification-confirmed{
width: 60%;
color: var(--grey-1);
font-size: 14px;
text-align: center;
.btn-undo{
    font-weight: 600;
    padding-left: 5px;
    color: var(--dark-1);
    
}
}

.verification{
width: 60%;

display: flex;





.verification-btn{
    width: 50%;
    padding: 20px 0;
    font-weight: 600;
    font-size: 14px;

    &:first-child{
        margin-right: 10px;
    }
}
}

@media(max-width: 940px) {

flex-direction: column;
align-items: center;
height: auto;
padding: 20px 0;

.verification,.verification-confirmed{
width: 100%;
margin-top: 20px;

.verification-btn{
width: 50%;
}
}
}

@media(max-width: 940px) {
padding: 10px;

}

`

export default Container