import { useEffect } from 'react';

export const withDate = (Component) => (props) => {
  useEffect(() => {
    console.log('mounted at', new Date());
  }, []);

  return <Component {...props} />;
};

// const ButtonWithDate = withDate(Button)
// <ButtonWithDate onClick={() => {}} />
