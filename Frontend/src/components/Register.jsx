import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/register', { username, password });
      alert('User registered successfully!');
      navigate('/login');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#ffe6e6',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ color: '#555', marginBottom: '1rem' }}>Register</h2>
      <form
        onSubmit={handleRegister}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          width: '300px',
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '1rem',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '0.5 rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#ccffff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Register
        </button>
      </form>
      {error && (
        <p style={{ color: 'red', marginTop: '1rem', fontSize: '0.9rem' }}>
          {error}
        </p>
      )}
    </div>
  );

};

export default Register;
