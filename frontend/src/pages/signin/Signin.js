import React from "react";
import styled from "@emotion/styled";
import { Link, Redirect } from "react-router-dom";
import { Logo, GlobalLoading } from "../../components";

export default function Signin(props) {
  const [identifiers, setIdentifiers] = React.useState({
    email: "",
    password: "",
  });

  const signin = () => {
    props.signin(identifiers.email, identifiers.password);
  };

  const clear = () => {
    setIdentifiers({
      email: "",
      password: "",
    });
  };

  console.log(props);

  return (
    <Container>
      <form className="form-signin">
        <Logo />
        <div>
          <h3 className="h4 m-2 font-weight-normal">Connexion</h3>
        </div>
        <div>
          <input
            type="email"
            className="form-control my-2"
            placeholder="Adresse email"
            value={identifiers.email}
            onChange={(event) =>
              setIdentifiers({ ...identifiers, email: event.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            className="form-control my-2"
            placeholder="Password"
            value={identifiers.password}
            onChange={(event) =>
              setIdentifiers({
                ...identifiers,
                password: event.target.value,
              })
            }
          />
        </div>
        <div className="d-flex">
          <button
            className="btn btn-success w-100 m-1"
            type="button"
            onClick={signin}
          >
            Se connecter
          </button>
          <button
            className="btn btn-danger w-100 m-1"
            type="button"
            onClick={clear}
          >
            Effacer
          </button>
        </div>
        <ul className="my-3">
          <li>
            <Link to="/signup">Créer un nouveau compte</Link>
          </li>
          <li>
            <Link to="/recover">Informations de connexion oubliées</Link>
          </li>
        </ul>
      </form>
      {props.loading && <GlobalLoading />}
      {props.isConnected && <Redirect to="/news" />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%:
  
  form {
    width: 300px;
  }
`;
