import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Button from '../Button';
import styles from './HorizontalTimeline.st.css';
import { dataHooks } from './constants';

/** TODO provide description */
class HorizontalTimeline extends React.PureComponent {
  state = {
    count: 0,
  };

  _handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const { dataHook, buttonText } = this.props;
    const isEven = count % 2 === 0;

    return (
      <div
        {...styles('root', { even: isEven, odd: !isEven }, this.props)}
        data-hook={dataHook}
      >
        <Text dataHook={dataHooks.horizontalTimelineCount}>
          You clicked this button {isEven ? 'even' : 'odd'} number (
          <span className={styles.number}>{count}</span>) of times
        </Text>

        <div className={styles.button}>
          <Button
            onClick={this._handleClick}
            dataHook={dataHooks.horizontalTimelineButton}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

HorizontalTimeline.displayName = 'HorizontalTimeline';

HorizontalTimeline.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Text for the button */
  buttonText: PropTypes.string,
};

HorizontalTimeline.defaultProps = {};

export default HorizontalTimeline;
