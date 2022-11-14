import styled from "styled-components"

const Container = styled.article`
    width: 530px;

    .wrapper{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

    .top{
        width: 100%;
        margin-bottom: 25px;

        .title{
            font-weight: 600;
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--dark-2);
            text-align: left;
        }
    }

    .activities{
        display: flex;
        flex-direction: column;
        width: 100%;

        
    }
}

@media(max-width: 940px) {

    

width: 100% !important;

}

@media(max-width: 562px) {

    
.top{
    margin: 15px 0 !important;

}


}
`

export default Container