import React, {useContext} from "react";
import newsContext from "../Context/NewsContext";

export function Navbar() {
    const context = useContext(newsContext);

    const {theme, setTheme} = context;

    const handleClick = () => {
        if (theme.mode === "light"){
            setTheme({
                ...theme,
                mode:"dark"
            })
            console.log(theme)
        }
        if (theme.mode === "dark"){
            setTheme({
                ...theme,
                mode:"light"
            })
        }
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
            <h3 className="text-light">NewsApp</h3>
          </a>
        </div>
        <div className="form-check form-switch form-check-reverse mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckReverse"
            onClick = {handleClick}
          />
          <label class="form-check-label" for="flexSwitchCheckReverse">
            <h5 className="text-light">Theme</h5>
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
