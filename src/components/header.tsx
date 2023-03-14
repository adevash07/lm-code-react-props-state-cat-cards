type HeaderProps = {
  numberOfCats?: number;
};

const Header: React.FC<HeaderProps> = ({ numberOfCats = 0 }) => (
  <header className='header__container'>
    <h1 className='header__title header__welcome'>Welcome to React!</h1>
    <h2 className='header__title'>
      {`There are ${numberOfCats} cats in the library`}
    </h2>
  </header>
);

export default Header;
