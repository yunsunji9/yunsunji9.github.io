import React, { useContext } from 'react';
import { LoginInputObj } from '../../constants/Constants';
import { DataConText } from '../../Routes/Login/LoginContainer';
import { InputSelectArea, InputSelectUnit } from './InputStyle';
import './InputText.scss';

function InputSelect({name}) {
	const {id, title, valueArr, error } = LoginInputObj[name];
	const { values, onChangeEvt } = useContext(DataConText);
	const { display } = values[name];

	const optionListReturn = options => {
		return options.map((option, idx) => {
			return (
				<option key={idx} val={option}>{option}</option>            
			);
		});
	};
	
	return (
		<InputSelectArea>
			<InputSelectUnit id={id} onBlur={onChangeEvt} aria-label={title}>
				<option value="" defaultValue>입력</option>
				{optionListReturn(valueArr)}
			</InputSelectUnit>

			{error &&
				<div className={"errorText " + (display ? '' : 'on')}>	
					{error}
				</div>
			}
		</InputSelectArea>
	);
}

export default InputSelect;