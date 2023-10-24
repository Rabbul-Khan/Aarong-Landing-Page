import './Header.scss';
import { AiOutlineAlignCenter } from 'react-icons/ai';

const Header = () => {
  return (
    <header>
      <h1 className="header--title">Aarong</h1>
      <div>
        <AiOutlineAlignCenter />
      </div>
      <div>Cart</div>
    </header>
  );
};

export default Header;
