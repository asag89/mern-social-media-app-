import styled from "styled-components"

const Container = styled.div`

width: 100%;
display: flex;
flex-direction: column;
padding: 10px;
.post-content-icons{
display: flex;
align-items: center;

.post-content-icon-wrapper{
width: 35px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: var(--dark-1);

&:hover{
    color: var(--grey-1);
}
}

.post-content-icon{
    width: 35px;
    height: 35px;
    padding: 5px;
}

.saved{
    padding: -5px;
}

.post-content-icon-wrapper:last-child{
    margin-left: auto;
}
}



.post-likes{
padding:3px 5px;
color: var(--dark-1);
font-weight: 600;
font-size: .9rem;
cursor: pointer;
}

.post-comments{
padding:3px 5px;

display: flex;
flex-direction: column;

.post-comments-item{


    .post-comments-count{
        color: var(--grey-1);
        cursor: pointer;
    }
}
.post-username{
    font-weight: 600;
    margin-right: 8px;
    color: var(--dark-1);
}

.post-comments-text{
    display: inline;
}
}

.post-ago{
padding:3px 5px;

font-weight: 300;
font-size: .9rem;
color: var(--grey-1);
}

@media(max-width: 562px) {

margin-bottom:${({ isModal }) => isModal ? "105px" : "0"};
}
`

export default Container