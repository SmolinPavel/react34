import { useEffect, useState } from 'react';

export const Third = () => {
  const [secret, setSecret] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/private', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
      },
    })
      .then((response) => response.json())
      .then(setSecret)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Secret data:</h1>
      <p>{secret}</p>
    </div>
  );
};
