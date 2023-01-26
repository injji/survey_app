import React from 'react';
import LogoIcon from '../../assets/cuteicon.svg'
import styled from 'styled-components'
import ButtonCore from '../../components/_Button/ButtonCore';

const Login = () => {
    return (
        <div>
            <Logo><img src={LogoIcon} alt="logoimg" />청년망태기</Logo>

            <ButtonCore className="orange">로그인</ButtonCore>
        </div>
    );
};

const Logo = styled.h1`
font-size: 30px;
img {
    margin-right: 8px;
}
`

export default Login;