function Header() {
  return (
    <header>
      <div className="title-Logo">
        <img src="./logo.png" alt="App Logo (Fact-O-Rama)" className="logo" />
        <h1 className="header-H1">Fact-O-Rama</h1>
      </div>
      <button className="btn main-Btn fact-Btn-Open">Share a fact</button>
    </header>
  );
}

export default Header;
