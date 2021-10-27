import { useEffect } from 'react';

const Test = ({ value }) => {
  useEffect(() => {
    console.log('effect');

    return () => {
      console.log('unmount');
    };
  }, [value]);

  return null;
};

// {true && <Test value={10} />} // effect (1)
// {true && <Test value={12} />} // unmount (1) effect(2)
// {false && <Test value={12} />} // unmount (2)
