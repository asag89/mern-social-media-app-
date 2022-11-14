import styled from "styled-components";

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

    .login{
        width: 400px;
        height: 100%;
        padding: 30px 20px;
        border: 0.5px solid var(--grey-4);
        display: flex;
        border-radius: 5px;
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
        margin-bottom: 10px;
    }

    .form .form-grp input {
        width: 100%;
        padding: 10px;
        margin-bottom: 30px;
        border-bottom: 1px solid var(--dark-2);
        background: transparent;
        font-size: 14px;
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
            top: 10px;
            right: 10px;
            font-size: 1.2rem;
            z-index: 25;
        }
    }

    .forget-password{
        font-weight: 400;
        cursor: pointer;
        text-align: center;
        margin-top: 15px;
        font-size: .9rem;
    }

    .btn-submit{
        width: 80%;
        background-color: var(--primary);
        width: 100%;
        height: 35px;
        border-radius: 10px;
        color: #fff;
        margin-top: 5px;

        &:disabled{
            background-color: var(--blue-2);
            cursor: initial;
        }
    }

    .error-msg{
        color: var(--red-2);
        text-align: center;
        margin-top: 10px;

        &::first-letter{
            text-transform: uppercase;
        }
    }

    .redirect{
        font-size: .9rem;
        text-align: center;
        margin-top: 20px;
    }

    .redirect-link{
        color: var(--primary);
        font-weight: 500;
    }

    .store{
        display: flex;
        justify-content: center;
        width: 35%;
        margin: 35px 0;
        gap: 10px;

    }

    .store-png{
        width: 130px;
    }

    @media(max-width:480px) {
        &{
            margin: 20px 0;
            padding: 0;

        }

        .login{
            border: none;
            width: 100%;
            padding: 10px;

        }

        .store{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 15px 0;


    }
    }
`

export default Container