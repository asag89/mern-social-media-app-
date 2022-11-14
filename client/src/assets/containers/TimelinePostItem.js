import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
border-radius: 10px;
background-color: var(--light-3);
margin-bottom: 20px;

.post-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post-header-user{
    display: flex;
    align-items: center;
    margin: 10px 15px;
}

.img-wrapper{
    width: 46px;
    height: 46px;

    & > a {
        width: 100%;
        height: 100%;
    }
}

.user-photo{
    width: 100%;
    height: 100%;
    object-fit: cover !important;
    border-radius: 50%;
}

.post-header-username{
    margin-left: 15px;
    font-size: 1rem;
    font-weight: 600;
}

.more-icon-wrapper{
    margin-right: 5px;
    padding: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.more-icon{
    font-size: 1.4rem;
}

.post-image-wrapper{
    width: 100%;
}

.post-image{
    width: 100%;
    object-fit: cover;
}
`

export default Container