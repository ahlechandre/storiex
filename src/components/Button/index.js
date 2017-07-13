import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = props => (
  props.isLink ?
    <Link to={props.to}>{props.text}</Link> :
    <button onClick={props.onClick}>{props.text}</button>
);

Button.defaultProps = {
  isLink: false,
  to: '/',
  onClick: event => (event.preventDefault()),
};

Button.propTypes = {
  isLink: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default Button;
