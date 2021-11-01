import { connect } from 'react-redux';

const selectValue = (state) => state.value.value;

export const FirstPageComponent = ({ value, increment }) => {
  const handleClick = () => {
    increment(5);
  };

  return (
    <div>
      <h1>First - {value}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: selectValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch({ type: 'INCREMENT', payload: value }),
});

export const FirstPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPageComponent);
