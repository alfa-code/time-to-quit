import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Step = (props) => {
  const {
    children, nextStep, prevStep, isLast, isFirst, hideControll,
  } = props;
  return (
    <div className="step">
      <div className="step--content">
        { children }
      </div>
      <br />
      <div className="step--controll">
        <button
          type="button"
          className="step--control"
          onClick={prevStep}
          disabled={isFirst}
          hidden={hideControll}
        >
          Prev
        </button>
        <button
          type="button"
          className="step--control"
          onClick={nextStep}
          disabled={isLast}
          hidden={hideControll}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Step.propTypes = {
  children: PropTypes.node,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  isLast: PropTypes.bool,
  isFirst: PropTypes.bool,
  hideControll: PropTypes.bool,
};

Step.defaultProps = {
  children: {},
  nextStep: () => {},
  prevStep: () => {},
  isLast: false,
  isFirst: false,
  hideControll: false,
};

export default Step;
