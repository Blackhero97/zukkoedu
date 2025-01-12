import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import English from "../english/English";
import Russian from "../russian/Russian";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logozukko.svg";
import language from "./assets/language.png";
import eng from "./assets/e.png";
import russia from "./assets/russia.png";
import uzb from "./assets/uzbekistan.png";
function App() {
  const [hdata, setHdata] = useState({
    headerData: [
      {
        link: "Biz haqimizda",
        page: "#main",
        name: "link",
        id: 1,
      },
      {
        link: "Qulayliklar",
        page: "#benifits",
        name: "link",
        id: 2,
      },
      {
        link: "Ustozlar",
        page: "#teachers",
        name: "link",
        id: 3,
      },
      {
        link: "Kontakt",
        page: "#location",
        name: "link",
        id: 4,
      },
      {
        link: "Bog'lanish",
        page: "tel:+998907004500",
        name: "button",
        id: 5,
      },
    ],
  });
  const [hide, setIsHide] = useState(false);
  const [switcher, setSwitcher] = useState(false);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="header-box">
            <header className="container">
              <span className="logo">
                <img src={logo} alt="" />
              </span>
              <nav className={hide ? "active" : ""}>
                <ul>
                  {hdata &&
                    hdata.headerData.map((e) => {
                      return (
                        <li
                          onClick={() => {
                            setIsHide(!hide);
                          }}
                          key={e.id}
                        >
                          <a href={e.page} className={e.name}>
                            {e.link}
                          </a>
                        </li>
                      );
                    })}
                  <div onClick={() => setIsHide(!hide)} className="close">
                    <i className="bx bx-x"></i>
                  </div>
                </ul>
              </nav>
              <div className="switch" onClick={() => setSwitcher(!switcher)}>
                <ul
                  className={
                    switcher ? "switch-lang switch-aktive " : "switch-lang"
                  }
                >
                  <img className="language" src={language} alt="" />
                  <li
                    onClick={() =>
                      setHdata({
                        headerData: [
                          {
                            link: "About us",
                            page: "#main",
                            name: "link",
                            id: 1,
                          },
                          {
                            link: "Facilities",
                            page: "#benifits",
                            name: "link",
                            id: 2,
                          },
                          {
                            link: "Teachers",
                            page: "#teachers",
                            name: "link",
                            id: 3,
                          },
                          {
                            link: "Contacts",
                            page: "#location",
                            name: "link",
                            id: 4,
                          },
                          {
                            link: "Contact with us",
                            page: "tel:+998907004500",
                            name: "button",
                            id: 5,
                          },
                        ],
                      })
                    }
                  >
                    <Link to={"eng"}>
                      <img src={eng} alt="" />
                    </Link>
                  </li>
                  <li
                    onClick={() =>
                      setHdata({
                        headerData: [
                          {
                            link: "О нас",
                            page: "#main",
                            name: "link",
                            id: 1,
                          },
                          {
                            link: "Удобство",
                            page: "#benifits",
                            name: "link",
                            id: 2,
                          },
                          {
                            link: "Учителя",
                            page: "#teachers",
                            name: "link",
                            id: 3,
                          },
                          {
                            link: "Контакты",
                            page: "#location",
                            name: "link",
                            id: 4,
                          },
                          {
                            link: "Сяжитесь с нами",
                            page: "tel:+998907004500",
                            name: "button",
                            id: 4,
                          },
                        ],
                      })
                    }
                  >
                    <Link to={"rus"}>
                      <img src={russia} alt="" />
                    </Link>
                  </li>
                  <li
                    onClick={() =>
                      setHdata({
                        headerData: [
                          {
                            link: "Biz haqimizda",
                            page: "#main",
                            name: "link",
                            id: 1,
                          },
                          {
                            link: "Qulayliklar",
                            page: "#benifits",
                            name: "link",
                            id: 2,
                          },
                          {
                            link: "Ustozlar",
                            page: "#teachers",
                            name: "link",
                            id: 3,
                          },
                          {
                            link: "Kontakt",
                            page: "#location",
                            name: "link",
                            id: 4,
                          },
                          {
                            link: "Bog'lanish",
                            page: "tel:+998907004500",
                            name: "button",
                            id: 4,
                          },
                        ],
                      })
                    }
                  >
                    <Link to={"/"}>
                      <img src={uzb} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div onClick={() => setIsHide(!hide)} className="menu">
                <i className="bx bx-menu"></i>
              </div>
            </header>
          </div>
          <div className="switch" onClick={() => setSwitcher(!switcher)}>
            <ul
              className={
                switcher ? "switch-lang switch-aktive " : "switch-lang"
              }
            >
              <img className="language" src={language} alt="" />
              <li
                onClick={() =>
                  setHdata({
                    headerData: [
                      {
                        link: "About us",
                        page: "#main",
                        name: "link",
                        id: 1,
                      },
                      {
                        link: "Facilities",
                        page: "#benifits",
                        name: "link",
                        id: 2,
                      },
                      {
                        link: "Teachers",
                        page: "#teachers",
                        name: "link",
                        id: 3,
                      },
                      {
                        link: "Contacts",
                        page: "#location",
                        name: "link",
                        id: 4,
                      },
                      {
                        link: "Contact with us",
                        page: "tel:+998907004500",
                        name: "button",
                        id: 5,
                      },
                    ],
                  })
                }
              >
                <Link to={"eng"}>
                  <img src={eng} alt="" />
                </Link>
              </li>
              <li
                onClick={() =>
                  setHdata({
                    headerData: [
                      {
                        link: "О нас",
                        page: "#main",
                        name: "link",
                        id: 1,
                      },
                      {
                        link: "Удобство",
                        page: "#benifits",
                        name: "link",
                        id: 2,
                      },
                      {
                        link: "Учителя",
                        page: "#teachers",
                        name: "link",
                        id: 3,
                      },
                      {
                        link: "Контакты",
                        page: "#location",
                        name: "link",
                        id: 4,
                      },
                      {
                        link: "Сяжитесь с нами",
                        page: "tel:+998907004500",
                        name: "button",
                        id: 4,
                      },
                    ],
                  })
                }
              >
                <Link to={"rus"}>
                  <img src={russia} alt="" />
                </Link>
              </li>
              <li
                onClick={() =>
                  setHdata({
                    headerData: [
                      {
                        link: "Biz haqimizda",
                        page: "#main",
                        name: "link",
                        id: 1,
                      },
                      {
                        link: "Qulayliklar",
                        page: "#benifits",
                        name: "link",
                        id: 2,
                      },
                      {
                        link: "Ustozlar",
                        page: "#teachers",
                        name: "link",
                        id: 3,
                      },
                      {
                        link: "Kontakt",
                        page: "#location",
                        name: "link",
                        id: 4,
                      },
                      {
                        link: "Bog'lanish",
                        page: "tel:+998907004500",
                        name: "button",
                        id: 4,
                      },
                    ],
                  })
                }
              >
                <Link to={"/"}>
                  <img src={uzb} alt="" />
                </Link>
              </li>
            </ul>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="eng" element={<English />} />
            <Route path="rus" element={<Russian />} />
          </Routes>

          <footer>
            <div className="footer-box container">
              <div className="footer-link-box">
                <span className="logo">
                  <img src={logo} alt="" />
                </span>
                <ul>
                  {hdata &&
                    hdata.headerData.map((e) => {
                      return (
                        <li key={e.id} className="links">
                          <a href={e.page} className={e.name}>
                            {e.link}
                          </a>
                        </li>
                      );
                    })}
                </ul>
                <ul>
                  <div className="ul-box">
                    <span>Telegram:</span>
                    <li className="social-networks">
                      <a target="_blank" href="https://t.me/ZukkoInm_Bot">
                        <i className="bx bxl-telegram"></i>
                      </a>
                    </li>
                  </div>
                  <div className="ul-box">
                    <span>Mail:</span>
                    <li className="social-networks">
                      <a href="mailto:zukkoedu@gmail.com">
                        <i className="bx bxl-gmail"></i>
                      </a>
                    </li>
                  </div>
                  <div className="ul-box">
                    <span>Telefon:</span>
                    <li className="social-networks">
                      <a href="tel:+998907004500">
                        <i className="bx bxs-phone"></i>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
