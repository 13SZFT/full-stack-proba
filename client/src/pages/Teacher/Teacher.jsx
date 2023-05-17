import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Teacher = () => {
  const [tanarok, setTanarok] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch('http://localhost:3500/tanarok');

        if (adat.ok) {
          const jsonData = await adat.json();
          setTanarok(jsonData.msg);
        } else {
          const jsonData = await adat.json();
          console.log(jsonData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, []);

  return (
    <div className="univerzalis-container">
      <Link to="/tanarfelvetel">Új tanár felvétele:</Link>
      {tanarok.map((tanar, index) => (
        <div className="diak-container" key={index}>
          <Link
            to={{
              pathname: '/tanar/' + index,
            }}
          >
            <h1>Tanár neve: {tanar.nev}</h1>
          </Link>
          <p>Kor: {tanar.kor}</p>
          <img src={tanar.kep} alt="kép" />
        </div>
      ))}
    </div>
  );
};

export default Teacher;
