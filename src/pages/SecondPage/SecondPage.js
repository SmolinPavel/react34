import { connect } from 'react-redux';

const selectValue = (state) => state.value.value;

export const SecondPageComponent = ({ value }) => {
  return (
    <div>
      <h1>Second</h1>
      <h3>Value: {value}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: selectValue(state),
});

export const SecondPage = connect(mapStateToProps)(SecondPageComponent);
