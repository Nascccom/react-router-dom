import styled from "styled-components";

const Header = styled.header`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const Body = styled.body`
    display: flex
`

const Content = styled.div`
    background-color: #282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`

const Footer = styled.footer`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`

const AdidasGallery = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;

    & > a > img {
        width: 250px;
    }
`


export const S = {
    Header,
    Body,
    Content,
    Footer,
    AdidasGallery
}