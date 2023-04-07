import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    margin-top: 50px;
    padding-top: 90px;
    padding-right: 20px;
    padding-left: 100px;
`;

export const Circulo = styled.div`
    position: absolute;
    top: 0px;
    width: 94.8%;
    height: 100%;
    background: #017143;
    clip-path: circle(600px at right 800px);  
`;

export let Image = styled.img`
    position: absolute;
    top: 40px;
    height: 90px;
    z-index: 1;
`;

export let Conteudo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        color: #333;
        font-size: 60px;
        font-weight: 500;
    }
    img {
        height: 500px;
    }
`;

export let CaixaTexto = styled.div`
    width: 760px;
    p {
        font-size: 16px;
    }
    margin-bottom: 60px;
`;

export let StyledSpan = styled.span`
    color: #017143;
    font-size: 70px;
    font-weight: 900;
`;

export let StyleSpan = styled.span`
    color: #4d4dfd;
    font-size: 60px;
    font-weight: 900;
`;

export let Button = styled.button`
    background: #017143;
    color: white;
    border-radius: 40px;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-top: 60px;
    height: 60px;
    width: 200px;
    font-size: 20px;
    position: absolute;
    left: 150px;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.5;
    }
`;

export let CaixaImagem = styled.div`
    z-index: 1;
    margin-top: 150px;
    padding: 20px;


`;



export let Menu = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    img{
        height: 90px;

        &:hover{
            transform: translateY(-25px);
            transition: 1s;
            cursor: pointer;
        }
    }
`;

