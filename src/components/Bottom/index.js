import  React from 'react';
import  PropTypes from 'prop-types';
//Styles
import {Wrapper, Content} from './Bottom.styles';

const Button = ({text , callback}) => (
    <Wrapper type="buttton" onClick={callback}>
       <Content>
           {text}
       </Content>
    </Wrapper>
);

Button.prototype = {
    text: PropTypes.string,
    callback: PropTypes.func
}

export default Button;