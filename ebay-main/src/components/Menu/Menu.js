import React, { useContext } from 'react';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
import { InnerLayout } from './MenuStyle';
import { DataConText } from '../../Routes/Main/MainContainer';

const Menu = () => {
  const { menu } = useContext(DataConText);
  const {mainMenu, sideMenu} = menu;

  return (
    <div>
      <InnerLayout>
        <MainMenu mainMenu={mainMenu}></MainMenu>
        <SubMenu sideMenu={sideMenu}></SubMenu>
      </InnerLayout>
    </div>
  );
}

export default Menu;
