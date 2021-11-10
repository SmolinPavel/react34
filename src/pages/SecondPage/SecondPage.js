import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectValue } from 'store/value';

export const SecondPage = () => {
  const { number } = useParams();
  const value = useSelector(selectValue);

  return (
    <div>
      <h1>Second: {number}</h1>
      <h3>Value: {value}</h3>
    </div>
  );
};
