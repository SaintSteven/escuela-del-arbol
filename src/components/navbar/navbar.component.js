import './navbar.component.css';
import { ReactComponent as Cat } from '../../media/icons/cat.svg';

function Navbar() {
  const navbarName = 'I am the navbar';
  return (    
    <div className="navbar">
      <p>{navbarName}</p>
      <div className="nav-img" onClick={()=>{hola()}} ><Cat/></div>
    </div>
  );
}

const hola = () => {
  console.log('hola');
}

export default Navbar;
