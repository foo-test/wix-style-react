import React, { PureComponent } from 'react';
import { generateDataAttr } from '../utils/generateDataAttr';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import Close from 'wix-ui-icons-common/system/Close';
import CloseLarge from 'wix-ui-icons-common/system/CloseLarge';
import { SIZES } from './constants';
import cx from 'classnames';

import PropTypes from 'prop-types';
import styles from './CloseButton.st.css';

class CloseButton extends PureComponent {
  static displayName = 'CloseButton';

  static propTypes = {
    /** render as some other component or DOM tag */
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.string,
    ]),
    /** additional css classes */
    className: PropTypes.string,
    /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
    children: PropTypes.node,
    /** skins of closebutton */
    skin: PropTypes.oneOf([
      'standard',
      'standardFilled',
      'light',
      'lightFilled',
      'dark',
      'transparent',
    ]),
    /** size of closebutton */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Click event handler  */
    onClick: PropTypes.func,
    /** applies disabled styles */
    disabled: PropTypes.bool,
    /** string based data hook for testing */
    dataHook: PropTypes.string,
  };

  static defaultProps = {
    skin: 'standard',
    size: 'small',
    disabled: false,
  };

  _renderCloseIcon(size) {
    let CloseIcon;
    if (size === SIZES.small) {
      // fallback to Close icon if children not provided (current behavior)
      CloseIcon = <Close data-hook="close" />;
    } else if (size === SIZES.medium) {
      CloseIcon = <CloseLarge data-hook="close-medium" />;
    } else {
      CloseIcon = <CloseLarge data-hook="close-large" size="12" />;
    }
    return CloseIcon;
  }

  render() {
    const {
      skin,
      size,
      className: userClassName,
      dataHook,
      children,
      ...rest
    } = this.props;

    const childSize = '18px';

    const { className } = styles('root', { skin, size });
    const classNames = cx(className, userClassName);

    return (
      <ButtonNext
        {...rest}
        {...styles('root', { skin, size }, this.props)}
        {...generateDataAttr(this.props, ['skin', 'size'])}
        data-hook={dataHook}
        className={classNames}
      >
        {children
          ? React.cloneElement(children, {
              size: childSize,
              width: childSize,
              height: childSize,
            })
          : this._renderCloseIcon(size)}
      </ButtonNext>
    );
  }
}

export default CloseButton;
