import styled from "styled-components"

const Container = styled.section`
    width: 100%;
    padding: 0 25px;
    margin: 60px 0;

    .wrapper{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .register{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        height: 640px;
        margin-bottom: 40px;
    }

    .register-img{
        width: 45%;
        height: 100%;
        object-fit: cover;
        border-radius: 3px;
    }

    .register-form-container{
        width: 40%;
        height: 100%;
        padding:  20px;
        border: 0.5px solid var(--grey-4);
        display: flex;
        flex-direction: column;
    }

    .logo{
        font-size: 4.5rem;
        font-weight: 400;
        font-family: "Italianno";
        text-align: center;
        }

    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-grp{
        width: 80%;
        position: relative;
        margin-bottom: 8px;
    }

    .register-form-top{
        width: 100%;
        text-align: center;
        font-weight: 500;
        color: #999;
        padding-bottom: 10px;
    }

    .form .form-grp input {
        width: 100%;
        padding: 10px;
        margin-bottom: 30px;
        border-bottom: 1px solid var(--dark-2);
        background: transparent;
        font-size: 16px;
    }

    .form .form-grp input:valid {
        border-color: var(--primary);
    }

    .form .form-grp label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
        pointer-events: none;
        transition: 0.5s;
        font-size: .9rem;
    }

    .form .form-grp input:focus~label,
    .form .form-grp input:valid~label {
        top: -18px;
        left: 0;
        color: var(--primary);
        font-size: 12px;
    }

    .password-wrapper{
        width: 100%;
        position: relative;

        .visibilityIcon{
            cursor: pointer;
            position: absolute;
            top: 11px;
            right: 10px;
            font-size: 1.2rem;
            z-index: 25;
        }
    }

    .btn-submit{
        width: 80%;
        background-color: var(--primary);
        width: 100%;
        height: 35px;
        border-radius: 10px;
        color: var(--light-1);

        &:disabled{
            background-color: var(--blue-2);
            cursor: initial;
        }
    }


    .error-msg{
        color: var(--red-2);
        text-align: center;
        &::first-letter{
            text-transform: uppercase;
        }
    }

    .register-policy{
        color: var(--dark-1);
        font-size: .9rem;
        margin: 17px 0;
        text-align: center;
    }

    .redirect{
        font-size: .9rem;
        text-align: center;
    }

    .redirect-link{
        color: var(--primary);
        font-weight: 500;
    }

    /* media queries */
    @media(max-width:1200px) {
        .form-grp{
            width: 90%;
        }

    }

    @media(max-width:1050px) {
        .register{
            width: 100%;

        }
    }

    @media(max-width:880px) {
        .register-img{
            display: none;
        }

        .register,
        .register-form-container{
            width: auto;
            height: auto;
        }
    }

    @media(max-width:480px) {
        &{
            margin: 10px 0;
            padding: 0 15px;
        }

        .register{
            margin-bottom: 20px;
        }

        .register-form-container{
            border: none;
            padding: 10px;

        }


        .form .form-grp input {
            margin-bottom: 20px;
        }
    }
`

export default Container