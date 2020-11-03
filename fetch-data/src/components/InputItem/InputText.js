import React, { useContext } from 'react';
import { DataConText } from '../../Routes/Login/LoginContainer';
import { LoginInputObj } from '../../constants/Constants';
import { InputTextArea, InputTextUnit } from './InputStyle';

function InputText({name}) {
    const { id, error, required } = LoginInputObj[name];
    const { values, onChangeEvt } = useContext(DataConText);
    const { display } = values[name];

    return (
     <>
        <InputTextArea>
            <InputTextUnit type="text" id={id} onBlur={onChangeEvt} required={required ? true : false}></InputTextUnit>
        </InputTextArea>
        {error &&
            <div className={"errorText " + (display ? '' : 'on')}>
               {error}
            </div>
        }
    </>
    );
}

export default InputText;