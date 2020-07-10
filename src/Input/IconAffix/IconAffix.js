import React from 'react';
import PropTypes from 'prop-types';
import InputConsumer from '../InputConsumer';
import classes from './IconAffix.st.css';

const IconAffix = ({ children, dataHook }) => (
  <InputConsumer consumerCompName={IconAffix.displayName}>
    {({ size, onInputClicked, disabled }) => {
      return (
        <div
          {...classes('root', { size, disabled })}
          onClick={!disabled ? onInputClicked : undefined}
          data-hook={dataHook}
        >
          {React.cloneElement(children, {
            size: size === 'small' ? '18px' : '24px',
          })}
        </div>
      );
    }}
  </InputConsumer>
);

IconAffix.displayName = 'Input.IconAffix';
IconAffix.propTypes = {
  children: PropTypes.element.isRequired,
  dataHook: PropTypes.string,
};

export default IconAffix;
