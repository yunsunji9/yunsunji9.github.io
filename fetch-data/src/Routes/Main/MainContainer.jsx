import React, { useEffect } from 'react';
import MainUtils from '../../utils/MainUtils';
import MainPresenter from './MainPresenter';
export const DataConText = React.createContext();

const MainContainer = () => {
  const {state, getData} = MainUtils();
  const {menu, mainStore, mainBest, mainProducts, mainSlider} = state;
  
	useEffect(() => {
    getData("DISPATCH_MENU", 'menu');
    getData("DISPATCH_CONTENT", 'mainStore');
    getData("DISPATCH_CONTENT", 'mainBest');
    getData("DISPATCH_CONTENT", 'mainProducts');
    getData("DISPATCH_SLIDE", 'mainSlider');
	}, []);

	return (
    <>
		<DataConText.Provider value={{menu, mainStore, mainBest, mainProducts, mainSlider}}>
			<MainPresenter></MainPresenter>
		</DataConText.Provider>
    </>
	);
}

export default MainContainer;
