import React from 'react';
import {S} from "./_styles";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routing";

export const NavMenu = () => {
    return (
      <S.Nav>
          <S.NavWrapper>
              <NavLink to={PATH.ADIDAS}>Adidas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
              <NavLink to={PATH.PUMA}>Puma</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
              <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
          </S.NavWrapper>
      </S.Nav>
    );
};