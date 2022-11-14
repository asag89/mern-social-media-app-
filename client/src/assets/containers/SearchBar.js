import styled from "styled-components"

const Container = styled.div`

display: flex;

align-items: center;




border-radius: 10px;
height: 35px;
width: 240px;
position: relative;

.search-wrapper{
    display: flex;
    align-items: center; 
    background-color: var(--light-2);
    border: 1px solid var(--light-4);
    transition: .5s;
   width: ${({ width }) => width};
    border-radius: 10px;
}


.navbar-search-label{
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-SearchIcon{
    padding: 0 10px !important;
    font-size: 2.6rem !important;
    color: #999;
}

.navbar-input{
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding-right: 10px;
    color: #888;
    background-color: var(--light-2);

    &:focus{
        color: var(--dark-1);
    }
}



.delete-btn{

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;

    .delete-icon{
        color: #888;
        font-size: 1.1rem;
    }
}

.cancel-btn{
    height: 100%;
   margin-left: 12px;
    padding-left: 5px;
    width: 10%;
    color: var(--dark-2);
    font-weight: 700;
}

@media(max-width: 562px) {

width: 100% !important;
margin-top: 20px;

}

@media(max-width: 450px) {

.cancel-btn{
    background-color: var(--light-1);
    height: 100%;
   margin-left: 12px;
    padding-left: 5px;
    width: 15%;
    color: var(--dark-2);
    font-weight: 700;
}
}


`

export default Container