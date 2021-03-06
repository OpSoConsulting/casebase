import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import BodyText from '../BodyText';

const BlockQuote = function BlockQuote({ children, color }) {
  return (
    <View
      style={[
        styles.blockQuote,
        styles[color || 'yellow'],
      ]}
    >
      <BodyText style={styles.grayText}>
        {children}
      </BodyText>
    </View>
  );
};

const propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

const defaultProps = {
  color: 'yellow',
};

BlockQuote.propTypes = propTypes;
BlockQuote.defaultProps = defaultProps;

export default BlockQuote;
