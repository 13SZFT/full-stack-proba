import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [nev, setNev] = useState('');
  const [jelszo, setJelszo] = useState('');
  const [jelszoIsmetles, setJelszoIsmetles] = useState('');
  const navigate = useNavigate();

  const regisztral = (e) => {
    e.preventDefault();

    if (jelszo === jelszoIsmetles) {
      const elkuld = async () => {
        const response = await fetch('http://localhost:3500', {
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

      elkuld();
    } else {
      window.alert('A két jelszó nem egyezik meg.');
    }
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
        <label htmlFor="jelszoIsmetles">Jelszó ismétlése: </label>
        <input
          type="password"
          id="jelszoIsmetles"
          name="jelszoIsmetles"
          onChange={(e) => setJelszoIsmetles(e.target.value)}
        />
        <br />
        <button onClick={(event) => regisztral(event)}>Regisztráció: </button>
      </form>
    </div>
  );
};

export default Home;
