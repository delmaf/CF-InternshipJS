import React, { useEffect, useState } from "react";
import ImageElement from "../elements/ImageElement/ImageElement";
import loginIco from "../img/login.svg";
import i18n from "../i18n/i18n";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [login, setLogin] = useState("Login");
  const [token, setToken] = useState(null);
  const { className } = props;

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setToken(items.token);
      setLogin(items.name + " <-X->");
    }
  }, [localStorage.getItem("user")]);

  return (
    <Link to={`/${i18n.language}/login`}>
      <div className="header__login">
        <div className="pl-52 text-white flex">
          <ImageElement src={loginIco} alt="Login" className={className} />
        </div>

        {token ? (
          <span
            onClick={() => {
              localStorage.removeItem("user"), window.location.reload();
            }}
          >
            <i>&nbsp;{login}</i>
          </span>
        ) : (
          <span>&nbsp;Login</span>
        )}
      </div>
    </Link>
  );
};
export default Login;
