import { connect } from 'react-redux';

import { clear, increment, setValue, selectValue } from 'store/value';

export const FirstPageComponent = ({ value, increment, clear, setValue }) => {
  const handleIncrement = () => {
    increment(5);
  };

  const handleClear = () => {
    clear();
  };

  const handleSetValue = () => {
    setValue(100);
  };

  return (
    <div>
      <h1>First - {value}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>
        <button onClick={handleClear}>Clear Value</button>
      </div>
      <div>
        <button onClick={handleSetValue}>Set Value</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: selectValue(state),
});

const mapDispatchToProps = {
  increment,
  clear,
  setValue,
};

export const FirstPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPageComponent);
