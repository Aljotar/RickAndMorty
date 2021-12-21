import Caratula from "./Caratula";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Spinner } from "react-bootstrap";
import React from "react";

export default function Caratulas(props) {
  const [caratulas, setCaratulas] = useState([]);
  const [species, setSpecies] = useState("");
  const [status, setSstatus] = useState("");
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const request = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?species=${species}&page=${pagina}&status=${status}`
      );
      const info = response.data.results;
      setCaratulas(info);
      setLoading(false);
    };
    request();
  }, [species, pagina, status]);

  const changeSpecies = (event) => {
    setSpecies(event.target.value);
  };
  const changeStatus = (event) => {
    setSstatus(event.target.value);
  };

  const clickPagina = () => {
    setPagina(pagina - 1);
  };

  const mapCaratulas = caratulas.map((noti, i) => (
    <Caratula key={noti.id} caratula={noti} />
  ));

  const anteriorDisabled = pagina === 1;
  return (
    <div className="text-center mt-4">
      {loading ? (
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <div className="d-flex">
            <form className="mx-5">
              <label className="text-white text-species" htmlFor="species">
                Species
              </label>
              <select
                className="mx-4 selector-species"
                name="species"
                id="Species"
                onChange={changeSpecies}
              >
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Disease">Disease</option>
                <option value="Animal">Animal</option>
                <option value="Mythological Creature">
                  Mythological Creature
                </option>
                <option value="Cronenberg">Cronenberg</option>
              </select>
            </form>
            <form className="mx-5">
              <label className="text-white text-species" htmlFor="status">
                Status
              </label>
              <select
                className="mx-3 selector-species"
                name="status"
                id="Status"
                onChange={changeStatus}
              >
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
              </select>
            </form>
          </div>
          <div className="d-flex flex-wrap">{mapCaratulas}</div>
          <Button
            variant="outline-success"
            className="mx-5 m-5"
            onClick={clickPagina}
            disabled={anteriorDisabled}
          >
            Anterior
          </Button>
          <Button
            variant="outline-success"
            className="m-5"
            onClick={() => {
              setPagina(pagina + 1);
            }}
            disabled={caratulas.length === 0}
          >
            Siguiente
          </Button>
        </>
      )}
    </div>
  );
}
