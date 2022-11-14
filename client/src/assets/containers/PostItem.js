import styled from "styled-components"

const Container = styled.div`

width:${({ parent }) => parent === "explore" ? "30%" : "calc(33% - 8px)"};
position: relative;
cursor: pointer;
margin: 5px auto;

&:last-child{
    margin: 5px ;
}

&:hover .post-img-container .post-img {
    opacity: .5;

}
&:hover .post-tools{
    z-index: 22;
    
}

.post-img-container{
    position: relative !important;

    width: 100% !important;
    border-radius: 5px !important;
    background-color: var(--dark-3);

    &::after{
        content: "" !important;
        display: block !important;
        padding-bottom: 100% !important;
    }

       
    .post-img{
        position: absolute !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: 50% 50% !important;
        border-radius: 5px;
    }
}

.post-tools{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
   
    .res{
        color: var(--light-1);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;

        .res-item{
            display: flex;
            align-items: center;

            &:last-child{
                cursor: pointer;
            }
          
            .icon{
                font-size: 1.5rem;
                margin-right: 5px;
            } 
        }
    }
}

@media(max-width: 753px) {

.posts{
gap: 4px !important;

}
}

@media(max-width: 650px) {

.res{
flex-direction: column;
font-size: .9rem;

.icon{
font-size: .9rem !important;

}
}
}

`

export default Container