import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from 'styled-components';

const HighlightWrapper = styled(SyntaxHighlighter)`
  &.code code {
    background: unset; // reset styles applied by spectre.css for code element
  }
`;

/**
 * MultiLineCode component - displays code block
 * Uses [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter) npm package for code highlighting
 */
const MultiLineCode = ({ 
  children, 
  className, 
  language, 
  style,
}) => (
  <HighlightWrapper 
    className={cn(
      className,
      'code',
    )} 
    language={language}
    {... language ? { ['data-lang'] : language } : {}}
    style={style}
  >
    {children}
  </HighlightWrapper>
);

MultiLineCode.propTypes = {
  /**
   * Passed styles to MultiLineCode component.
   */
  className: PropTypes.string,
  /**
   * Code to be displayed inside block passed as string
   */
  children: PropTypes.string,
  /**
   * Language of the code block
   */
  language: PropTypes.string,
  /**
   * Custom styles passed to the code block
   * Refer [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter) prop `style` under props section for list of allowed styles
   */
  style: PropTypes.object,
};

MultiLineCode.defaultProps = {
  className: '',
  children: null,
  language: null,
  style: undefined,
};

export default MultiLineCode;
