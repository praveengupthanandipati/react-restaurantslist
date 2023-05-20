
function Header() {
    let urlis="https://google.com";
    let city="Hyderabad";
  return (
    <header>
        <div className="container">
            <a href="https://google.com">
                <h1>Restaurants in {city}</h1>
            </a>
            <nav>
                <a href="{urlis}">Home</a>
                <a href="{urlis}">About</a>
                <a href="{urlis}">Cities</a>
                <a href="{urlis}">Contact</a>
            </nav>
        </div>
    </header>
  );
}

export default Header;
