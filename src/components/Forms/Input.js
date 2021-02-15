import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useId } from 'react-id-generator';

const Input = ({ className, label, placeholder }) => {
  const [htmlId] = useId();

  return (
    <div className={cn(className, 'form-group')}>
      {!!label && (
        <label 
          className={cn(className, 'form-label')} 
          htmlFor={htmlId}
        >
          {label}
        </label>
      )}
      <input 
        className={cn(className, 'form-input')} 
        type="text" 
        id={htmlId}
        placeholder={placeholder} 
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
  placeholder: '',
};

export default Input;
