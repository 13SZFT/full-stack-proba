import { useState } from 'react';

const Ujtanar = () => {
  const [nev, setNev] = useState('');
  const [kor, setKor] = useState(0);
  const [szemszin, setSzemszin] = useState('');
  const [telefonszam, setTelefonszam] = useState('');
  const [email, setEmail] = useState('');
  const [kep, setKep] = useState('');

  const feldolgoz = () => {};
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
                  onChange={(e) => setKep(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={feldolgoz()}>Feldolgoz</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Ujtanar;
