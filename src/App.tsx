import React from 'react';
import {S} from "./components/pages/_styles";
import {NavMenu} from "./features/NavMenu";
import Routing from "./features/Routing";


function App() {

    return (
      <div>
          <S.Header><h1>HEADER</h1></S.Header>
          <S.Body>
              <NavMenu/>

              <S.Content>
                  <Routing/>
              </S.Content>

          </S.Body>
          <S.Footer>abibas 2023</S.Footer>
      </div>
    );
}


export default App;
