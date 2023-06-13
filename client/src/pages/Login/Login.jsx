import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [nev, setNev] = useState('');
  const [jelszo, setJelszo] = useState('');
  const navigate = useNavigate();

  const belepes = (e) => {
    e.preventDefault();

    const belep = async () => {
      const response = await fetch('http://localhost:3500/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nev, jelszo }),
      });

      if (response.ok) {
        const valasz = await response.json();
        window.alert(valasz.msg);
        localStorage.setItem('isLoggedIn', true);
        navigate('/login');
      } else {
        const valasz = await response.json().msg;
        window.alert(valasz.msg);
      }
    };

    belep();
  };

  return (
    <div className="diak-container">
      <form>
        <label htmlFor="nev">Név: </label>
        <input
          type="text"
          id="nev"
          name="nev"
          onChange={(e) => setNev(e.target.value)}
        />
        <br />
        <label htmlFor="jelszo">Jelszó: </label>
        <input
          type="password"
          id="jelszo"
          name="jelszo"
          onChange={(e) => setJelszo(e.target.value)}
        />
        <br />
        <br />
        <button onClick={(event) => belepes(event)}>Belépés: </button>
      </form>
    </div>
  );
};

export default Login;
