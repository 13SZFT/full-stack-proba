import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Tanar = () => {
  const [tanar, setTanar] = useState({});
  const param = useParams();
  console.log(param);
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch("http://localhost:3500/tanarok");

        if (adat.ok) {
          const jsonData = await adat.json();
          console.log(jsonData);
          let tanarVal = jsonData.msg.filter((elem) => elem._id === param.id);
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

  const torol = (id) => {
    console.log(id);
    const tanarTorol = async () => {
      try {
        const toroltTanar = await fetch("http://localhost:3500/tanarok", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (toroltTanar.ok) {
          const jsonData = await toroltTanar.json();
          window.alert(jsonData.msg);
          navigate("/teacher");
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
    <div className="diak-container">
      <h1>A tanár neve: {tanar.nev}</h1>
      <p>A tanár életkora: {tanar.kor}</p>
      <p>Telefonszáma: {tanar.telefonszam}</p>
      <p>Szem színe: {tanar.szemszin}</p>
      <p>E-mail: {tanar.email}</p>
      <img src={tanar.kep} alt="kép" />
      <button onClick={() => torol(tanar._id)}>Töröl</button>
    </div>
  );
};

export default Tanar;
