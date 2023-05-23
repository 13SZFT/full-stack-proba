import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ujtanar = () => {
  const [nev, setNev] = useState("");
  const [kor, setKor] = useState(0);
  const [szemszin, setSzemszin] = useState("");
  const [telefonszam, setTelefonszam] = useState("");
  const [email, setEmail] = useState("");
  const [kep, setKep] = useState("");

  const navigate = useNavigate();

  const feldolgoz = (e) => {
    e.preventDefault();
    const adatok = { nev, kor, szemszin, telefonszam, email, kep };

    const elkuld = async () => {
      const adat = await fetch("http://localhost:3500/tanarok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adatok),
      });

      if (adat.ok) {
        const response = await adat.json();
        window.alert(response.msg);
        navigate("/teacher");
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
                <button onClick={(event) => feldolgoz(event)}>Feldolgoz</button>
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
