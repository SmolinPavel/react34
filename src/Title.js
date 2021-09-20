export const Title = ({ children, test }) => {
  console.log(test); // true
  return (
    <h1 style={{ color: 'red', backgroundColor: 'white' }}>
      Hello React #{children}
    </h1>
  );
};
