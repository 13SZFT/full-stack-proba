import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Diak = () => {
  const [diak, setDiak] = useState({});
  const param = useParams();
  console.log(param);

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch('http://localhost:3500/diakok');

        if (adat.ok) {
          const jsonData = await adat.json();
          console.log(jsonData);
          let diakVal = jsonData.msg.filter(
            (elem, index) => index === +param.id
          );
          console.log(diakVal);
          setDiak(diakVal[0]);
        } else {
          const jsonData = await adat.json();
          console.log(jsonData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, [param.id]);
  return (
    <div className="diak-container">
      <h1>A diák neve: {diak.nev}</h1>
      <p>A diák életkora: {diak.kor}</p>
      <p>Telefonszáma: {diak.telefonszam}</p>
      <p>Szem színe: {diak.szemszin}</p>
      <p>E-mail: {diak.email}</p>
      <img src={diak.kep} alt="kép" />
    </div>
  );
};

export default Diak;
