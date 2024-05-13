import { useState } from 'react';

// import { useAuth } from './AuthContext';
import { useAuth } from './AuthProvider';
interface AuthFormProps {
  closeModal: () => void;
}

export default function AuthForm({ closeModal }: AuthFormProps) {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuthFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = `http://localhost:3000/auth/${isSignUp ? 'create' : 'login'}`;
    const userData = isSignUp
      ? { username, password, email }
      : { username, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.success) {
        console.log(`${isSignUp ? 'Signup' : 'Login'} successful!`);
        if (!isSignUp) {
          // data.userId = data.userId.toString();
          login(data);
          closeModal();
        } else {
          setIsSignUp(false);
        }
      } else {
        console.error(`${isSignUp ? 'Signup' : 'Login'} failed!`);
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <img
        src="/images/logo.png"
        className="w-32"
      />
      <h3 className="text-3xl font-bold">K-Lax</h3>
      <h5 className="mb-8 text-lg">Game Collection</h5>
      <form
        onSubmit={handleAuthFormSubmit}
        className="flex flex-col items-center justify-between"
      >
        {isSignUp && (
          <>
            <label
              htmlFor="email"
              className="hidden"
            >
              E-Mail
            </label>
            <input
              id="email"
              className="mx-2 mb-4 w-64 rounded-2xl border-2 border-night-900 px-4 py-2 text-night-500 focus:border-emerald-400 focus:outline-none"
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              tabIndex={1}
            ></input>
          </>
        )}
        <label
          htmlFor="username"
          className="hidden"
        >
          Username
        </label>
        <input
          className="mx-2 mb-4 w-64 rounded-2xl border-2 border-night-900 px-4 py-2 text-night-500 focus:border-emerald-400 focus:outline-none"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          tabIndex={2}
        ></input>
        <label
          htmlFor="password"
          className="hidden"
        >
          Password
        </label>
        <input
          className="mx-2 mb-8 w-64 rounded-2xl border-2 border-night-900 px-4 py-2 text-night-500 focus:border-emerald-400 focus:outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          tabIndex={3}
        ></input>
        <button
          className="mb-4 rounded bg-emerald-700 px-4 py-1 font-bold text-night-100 hover:border-emerald-200 hover:bg-emerald-400 hover:text-emerald-100"
          type="submit"
        >
          {isSignUp ? 'Create Account' : 'Login'}
        </button>
      </form>
      <button
        className="mb-4 rounded bg-emerald-700 px-4 py-1 font-bold text-night-100 hover:border-emerald-200 hover:bg-emerald-400 hover:text-emerald-100"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? 'Login' : 'Create an Account'}
      </button>
    </div>
  );
}
