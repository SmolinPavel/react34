import { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/get-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const token = await response.json();

      localStorage.setItem('auth-token', token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <input value={username} onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};
