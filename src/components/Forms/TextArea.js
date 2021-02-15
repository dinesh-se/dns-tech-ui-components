import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useId } from 'react-id-generator';

const TextArea = ({ className, label, placeholder, rows }) => {
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
      <textarea 
        className={cn(className, 'form-input')} 
        type="text" 
        id={htmlId}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  className: '',
  label: '',
  placeholder: '',
  rows: 3,
};

export default TextArea;
