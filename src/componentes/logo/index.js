import logo from "../../logo.svg";
import "./index.css";
function Logo() {
  return (
    <div className="Logo">
      <img src={logo} className="App-logo" alt="logo" />
      <p style={{ alignContent: "center" }}>
        Edit <strong>src/App.js</strong> and save to reload.
      </p>
    </div>
  );
}

export default Logo;
