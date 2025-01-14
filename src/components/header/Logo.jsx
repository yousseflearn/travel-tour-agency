import logo from "../../images/logo.jpg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Rak-logo" className="logo-img" />
      <div className="logo-text">
        <b>Rak</b>
        <b>Desert</b>
        <b>Safari</b>
      </div>
    </div>
  );
};

export default Logo;
