import styled from "styled-components";

const Nav = styled.nav`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color: #282c34;
    font-size: 30px;
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

const Model =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > img {
        width: 300px;
    }
`

export const S = {
    NavWrapper, Nav, Model
}