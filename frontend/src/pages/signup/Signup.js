import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components";

export default function Signup(props) {
  const [userInfos, setUserInfos] = React.useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
  });
  
  console.log(props);

  const signup = () => {
    props.signup(userInfos.name, userInfos.surname, userInfos.email, userInfos.password, userInfos.phone, userInfos.birthday);
  };
  
  const clear = () => {
    setUserInfos({
      name: "",
      surname: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-9 col-sm-8 col-md-7 col-lg-5 col-xl-4 col-xxl-3 m-auto">
          <form className="form-signin">
            <Logo />
            <div>
              <h3 className="h4 m-2 font-weight-normal">Inscription</h3>
            </div>
            <div>
              <input
                type="text"
                className="form-control my-2"
                placeholder="Prénom *"
                value={userInfos.name}
                onChange={(event) => {
                  setUserInfos({ ...userInfos, name: event.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control my-2"
                placeholder="Nom de famille *"
                value={userInfos.surname}
                onChange={(event) => {
                  setUserInfos({ ...userInfos, surname: event.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control my-2"
                placeholder="Adresse email *"
                value={userInfos.email}
                onChange={(event) => {
                  setUserInfos({ ...userInfos, email: event.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control my-2"
                placeholder="Password *"
                value={userInfos.password}
                onChange={(event) => {
                  setUserInfos({ ...userInfos, password: event.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="tel"
                className="form-control my-2"
                placeholder="Téléphone *"
                value={userInfos.phone}
                onChange={(event) => {
                  setUserInfos({ ...userInfos, phone: event.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="date"
                className="form-control my-2"
                placeholder="Date de naissance *"
                value={userInfos.birthday}
                onChange={(event) => {
                  setUserInfos({ ...userInfos, birthday: event.target.value });
                }}
              />
            </div>
            <div className="d-flex">
              <button
                className="btn btn-success w-100 m-1"
                type="button"
                onClick={signup}
              >
                S'inscrire
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
                <Link to="/signin">J'ai déjà crée un compte</Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
