import styled from "styled-components"

const Container = styled.div`

width: 100%;
height: 300px;
text-align: center;

.no-post-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0 40px;
    color: var(--dark-1);
    .icon-wrapper{
        width: 60px;
        height: 60px;
        border: 2px solid;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon{
            font-size: 2rem;
        }
    }

    h2{
        margin: 10px 0;
        font-size: 1.8rem;
        font-weight: 300;
        
    }

}

@media(max-width: 962px) {
    width: 95% !important;
    

}
`

export default Container