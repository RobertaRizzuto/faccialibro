import Button from "../Button";
import Modal from "../Modal/Modal";
import "./index.css";
import logo from "./logo.svg";
import { useState } from "react";

const ListItem = ({ link = "/", title }) => {
  return (
    <li className="ListItem">
      <a className="ListItem__link" href={link}>
        {title}
      </a>
    </li>
  );
};
const Navbar = () => {
  const linkList = [
    {
      id: 1,
      title: "Home",
      url: "#",
    },
    {
      id: 2,
      title: "About",
      url: "#",
    },
    {
      id: 3,
      title: "Contacts",
      url: "#",
    },
    {
      id: 4,
      title: localStorage.getItem("username") || "no-user",
      url: "#",
    },
  ];
  const [isModalVisible, setModalVisibility] = useState(false);
  return (
    <nav className="main-navbar">
      <section className="logotype">
        <img className="logo" src={logo} alt="logo" />
        <h1>Faccialibro</h1>
      </section>
      <section className="dropdown">
        <ul>
          {linkList.map((link) => (
            <ListItem title={link.title} link={link.url} key={link.id} />
          ))}
          {localStorage.getItem("username") ? (
            <Button
              textContent="logout"
              onBtnClick={() => {localStorage.clear();
              window.location.reload()}}
            />
          ) : (
            <Button
              textContent="login"
              onBtnClick={() => setModalVisibility(true)}
            />
          )}
        </ul>
        {isModalVisible && (
          <Modal
            type="login"
            setModalVisibility={() => setModalVisibility(false)}
          />
        )}
      </section>
    </nav>
  );
};

export default Navbar;
