import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Tanar = () => {
  const [tanar, setTanar] = useState({});
  const param = useParams();
  console.log(param);

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch('http://localhost:3500/tanarok');

        if (adat.ok) {
          const jsonData = await adat.json();
          console.log(jsonData);
          let tanarVal = jsonData.msg.filter(
            (elem, index) => index === +param.id
          );
          console.log(tanarVal);
          setTanar(tanarVal[0]);
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
      <h1>A tanár neve: {tanar.nev}</h1>
      <p>A tanár életkora: {tanar.kor}</p>
      <p>Telefonszáma: {tanar.telefonszam}</p>
      <p>Szem színe: {tanar.szemszin}</p>
      <p>E-mail: {tanar.email}</p>
      <img src={tanar.kep} alt="kép" />
    </div>
  );
};

export default Tanar;
