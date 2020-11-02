import React from 'react';
import LoginUtils from '../../utils/LoginUtils';
import LoginPresenter from './LoginPresenter';
export const DataConText = React.createContext();

function LoginContainer() {
    const UserJoinValues = LoginUtils({
        name: {
            value: '',
            display: true
        },
        email: {
            value: '',
            display: true
        },
        gender: {
            value: '',
            display: true
        },
        year: {
            value: '',
            display: true
        },
        month: {
            value: '',
            display: true
        },
        day: {
            value: '',
            display: true
        }
    });
    const {values, onChangeEvt, onSubmitEvt} = UserJoinValues;

    return (
        <DataConText.Provider value={{values, onChangeEvt, onSubmitEvt}}>
            <LoginPresenter></LoginPresenter>
        </DataConText.Provider>
    );
}

export default LoginContainer;
