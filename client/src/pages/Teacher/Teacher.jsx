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

  const torol = (id) => {
    console.log(id);
    const tanarTorol = async () => {
      try {
        const toroltTanar = await fetch('http://localhost:3500/tanarok', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });

        if (toroltTanar.ok) {
          const modositottTanarok = tanarok.filter((item) => item._id !== id);
          setTanarok(modositottTanarok);
          const jsonData = await toroltTanar.json();
          window.alert(jsonData.msg);
        } else {
          const jsonData = await toroltTanar.json();
          console.log(jsonData);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    tanarTorol();
  };

  return (
    <div className="univerzalis-container">
      <Link to="/tanarfelvetel">Új tanár felvétele:</Link>
      {tanarok.map((tanar) => (
        <div className="diak-container" key={tanar._id}>
          <Link
            to={{
              pathname: '/tanar/' + tanar._id,
            }}>
            <h1>Tanár neve: {tanar.nev}</h1>
          </Link>
          <p>Kor: {tanar.kor}</p>
          <img src={tanar.kep} alt="kép" />
          <button onClick={() => torol(tanar._id)}>Töröl</button>
          <Link
            to={{
              pathname: '/tanarmodosito/' + tanar._id,
            }}>
            <h1>Módosít</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Teacher;
