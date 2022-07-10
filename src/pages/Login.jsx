import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <form className={'login__form'} onSubmit={login}>
            <h1 className={'login__text'}>Авторизация</h1>
            <MyInput type={'text'} placeholder={'Введите логин'}/>
            <MyInput type={'password'} placeholder={'Введите пароль'}/>
            <MyButton style={{marginTop: 15}} onSubmit={() => login}>Войти</MyButton>
        </form>
    );
};

export default Login;