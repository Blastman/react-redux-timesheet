import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const FieldWrapper = ({ name, label, invalid, children, component, ...rest }) => (
  <Field
    name={name}
    render={({ field  }) => (
      <FormGroup validationState={invalid ? 'error' : null}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...rest} {...field} componentClass={component} >
          {children}
        </FormControl>
        {invalid && (
          <small style={{ color: 'red' }}>{invalid}</small>
        )}
      </FormGroup>
    )}
  />
);

FieldWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  invalid: PropTypes.string,
  component: PropTypes.oneOf(['input', 'select'])
};

export {
  FieldWrapper
}