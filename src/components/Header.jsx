function Header({ onToggle, isDark }) {
  return (
    <header>
      <h1>TODO</h1>
      <img
        src={!isDark ? "./images/icon-moon.svg" : "./images/icon-sun.svg"}
        alt="icon"
        className="header-icon"
        onClick={onToggle}
      />
    </header>
  );
}
export default Header;
