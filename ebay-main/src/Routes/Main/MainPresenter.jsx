import React, { useContext } from 'react';
import { DataConText } from './MainContainer';

import Menu from "../../components/Menu";
import Store from '../../components/Store';
import Best from '../../components/Best';
import Chance from '../../components/Chance';
import Slider from "../../components/Slider/index";

const ChancePresenter = () => {
    const { mainStore, mainBest, mainProducts, mainSlider } = useContext(DataConText);
    
	return (
		<>
            <Menu></Menu>
            <Slider mainSlider={mainSlider}></Slider>
            <Store mainStore={mainStore}></Store>
            <Best mainBest={mainBest}></Best>
            <Chance mainProducts={mainProducts}></Chance>
		</>
	);
}

export default ChancePresenter;
