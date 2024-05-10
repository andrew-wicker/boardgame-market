import { useState } from 'react';

export default function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      console.log('Login successful');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          className="mx-2 w-48 rounded-2xl border-2 border-night-900 p-1 text-night-500"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className="mx-2 w-48 rounded-2xl border-2 border-night-900 p-1 text-night-500"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="rounded bg-emerald-700 px-4 py-1 font-bold text-night-100 hover:border-emerald-200 hover:bg-emerald-400 hover:text-emerald-100"
          type="submit"
        >
          Login
        </button>
      </form>
      <a
        href="/register"
        className=""
      >
        Create an account
      </a>
    </>
  );
}
