import React, { useContext, useEffect, useState } from "react";
import newsContext from "../Context/NewsContext";

export function Navbar() {
  const context = useContext(newsContext);
  const { theme, setTheme, fetchAll } = context;

  const [category, setCategory] = useState("general");

  const handleClickTheme = () => {
    if (theme.mode === "light") {
      setTheme({
        ...theme,
        mode: "dark",
        text:"light",
        bgColor: "#4B0150",
        // bgColor: "white",
        card: "#36013F",
        navbar:"#36013F"
      });
    }
    if (theme.mode === "dark") {
      setTheme({
        ...theme,
        mode: "light",
        text:"dark",
        bgColor: "white",
        // bgColor: "#4B0150",
        card: "#C0C0C0",
        navbar:"black"
      });
    }
  };
  
  // reason why i put it here was that it was taking action after one step after re render 
  // so i had to put background dark in background light
  document.body.style.backgroundColor = theme.bgColor;

  const handleClick = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    fetchAll(category);
    // eslint-disable-next-line
  }, [category]);
  // whenever category changes re renders the Dom

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: theme.navbar}}>
        <div className="container-fluid">
          <a className={`navbar-brand`} href="/">
            <h3 className={`text-${theme.text === "dark"? "light": theme.text}`}>NewsApp</h3>
          </a>
        </div>

        <div className="form-check form-switch form-check-reverse mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckReverse"
            onClick={handleClickTheme}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
          </label>
        </div>
        <div className="dropdown mx-3">
          <button
            className={`btn dropdown-toggle btn-${
              theme.mode === "light" ? "secondary" : "dark"
            }`}
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Category
          </button>
          <div
            className="dropdown-menu"
            style={{
              backgroundColor: `${theme.mode === "light" ? "white" : "black"}`,
              padding: "0px",
            }}
            aria-labelledby="dropdownMenu2"
          >
            <button
              className={`dropdown-item ${
                theme.mode === "light" ? "lt" : "dk"
              } text-${theme.text}`}
              type="button"
              onClick={handleClick}
              value="general"
            >
              General
            </button>
            <button
              className={`dropdown-item ${
                theme.mode === "light" ? "lt" : "dk"
              } text-${theme.text}`}
              type="button"
              onClick={handleClick}
              value="sports"
            >
              Sports
            </button>
            <button
              className={`dropdown-item ${
                theme.mode === "light" ? "lt" : "dk"
              } text-${theme.text}`}
              type="button"
              onClick={handleClick}
              value="business"
            >
              Business
            </button>
            <button
              className={`dropdown-item ${
                theme.mode === "light" ? "lt" : "dk"
              } text-${theme.text}`}
              type="button"
              onClick={handleClick}
              value="health"
            >
              Health
            </button>
            <button
              className={`dropdown-item ${
                theme.mode === "light" ? "lt" : "dk"
              } text-${theme.text}`}
              type="button"
              onClick={handleClick}
              value="science"
            >
              Science
            </button>
            <button
              className={`dropdown-item ${
                theme.mode === "light" ? "lt" : "dk"
              } text-${theme.text}`}
              type="button"
              onClick={handleClick}
              value="technology"
            >
              Tech
            </button>
            <button
              className={`dropdown-item ${
                theme.mode === "light" ? "lt" : "dk"
              } text-${theme.text}`}
              type="button"
              onClick={handleClick}
              value="entertainment"
            >
              Entertainment
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
