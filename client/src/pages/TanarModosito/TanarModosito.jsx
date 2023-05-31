import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TanarModosito = () => {
  const param = useParams();
  console.log(param.id);
  const [paramId, setParamId] = useState(param.id);
  const [nev, setNev] = useState('');
  const [kor, setKor] = useState(0);
  const [szemszin, setSzemszin] = useState('');
  const [telefonszam, setTelefonszam] = useState('');
  const [email, setEmail] = useState('');
  const [kep, setKep] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch('http://localhost:3500/tanarok');

        if (adat.ok) {
          const jsonData = await adat.json();
          console.log(jsonData);
          let tanarVal = jsonData.msg.filter((elem) => elem._id === param.id);
          console.log(tanarVal);
          setNev(tanarVal[0].nev);
          setKor(tanarVal[0].kor);
          setSzemszin(tanarVal[0].szemszin);
          setTelefonszam(tanarVal[0].telefonszam);
          setEmail(tanarVal[0].email);
          setKep(tanarVal[0].kep);
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

  const modosit = (e) => {
    e.preventDefault();
    const adatok = { paramId, nev, kor, szemszin, telefonszam, email, kep };
    console.log(adatok);

    const elkuld = async () => {
      const adat = await fetch('http://localhost:3500/tanarok', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adatok),
      });

      console.log(adat);
      if (adat.ok) {
        const response = await adat.json();
        window.alert(response.msg);
        navigate('/teacher');
      } else {
        const response = await adat.json();
        window.alert(response.msg);
      }
    };

    elkuld();
  };

  return (
    <div className="univerzalis-container">
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="nev">Neve</label>
              </td>
              <td>
                <input
                  type="text"
                  name="nev"
                  id="nev"
                  value={nev}
                  onChange={(e) => setNev(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="kor">Kora</label>
              </td>
              <td>
                <input
                  type="number"
                  name="kor"
                  id="kor"
                  value={kor}
                  onChange={(e) => setKor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="szemszin">Szeme színe</label>
              </td>
              <td>
                <input
                  type="text"
                  name="szemszin"
                  id="szemszin"
                  value={szemszin}
                  onChange={(e) => setSzemszin(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="telefonszam">Telefon száma</label>
              </td>
              <td>
                <input
                  type="text"
                  name="telefonszam"
                  id="telefonszam"
                  value={telefonszam}
                  onChange={(e) => setTelefonszam(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">E-mail címe</label>
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="kep">Avatár címe</label>
              </td>
              <td>
                <input
                  type="text"
                  name="kep"
                  id="kep"
                  value={kep}
                  onChange={(e) => setKep(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={(event) => modosit(event)}>Módosít</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default TanarModosito;
