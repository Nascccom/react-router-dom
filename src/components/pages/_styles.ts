import styled from "styled-components";

const Header = styled.header`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: #232b31
    }

    & > a.active {
        text-decoration: underline;
        color: #6858cc
    }

    & > a:hover {
        color: cornflowerblue;
    }
`

const Body = styled.body`
    display: flex
`

const Nav = styled.nav`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color: #282c34;
    font-size: 30px;
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



export const S = {
    NavWrapper,
    Header,
    Body,
    Nav, Content, Footer
}