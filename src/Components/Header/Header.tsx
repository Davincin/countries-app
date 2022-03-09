import './Header.css'

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="hero-shadow"></div>
            <div className="container">
              <h1 className="header__title">Countries</h1>
            </div>
        </header>
    );
}
 
export default Header;