import React, { useContext } from 'react';
import { DataConText } from './LoginContainer';
import InputText from '../../components/InputItem/InputText.js';
import InputLabel from '../../components/InputItem/InputLabel.js';
import InputSelect from '../../components/InputItem/InputSelect.js';
import { InnerLayout, InputBx, BtnResist } from './LoginStyle';

function LoginPresenter() {
const { onSubmitEvt } = useContext(DataConText);  
  return (
    <form>
        <InnerLayout>
            <InputBx>
                <InputLabel name="name"></InputLabel>
                <InputText name="name"></InputText>
            </InputBx>

            <InputBx selBx>
                <InputLabel name="gender"></InputLabel>
                <InputSelect name="gender"></InputSelect>
            </InputBx>

            <InputBx>
                <InputLabel name="email"></InputLabel>
                <InputText name="email"></InputText>
            </InputBx>
            
            <InputBx selBx>
                <InputLabel name="year" labelTitle='생년월일'></InputLabel>
                <InputSelect name="year"></InputSelect>
                <InputSelect name="month"></InputSelect>
                <InputSelect name="day"></InputSelect>
            </InputBx>

            <BtnResist type="submit" onClick={onSubmitEvt}>등록</BtnResist>
        </InnerLayout>
    </form>
  );
}

export default LoginPresenter;
