
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';


function Navbar(){
  return(
    <div id="navbar">

      <img className="logo" src="images/frightful-fashion.png" alt="logo"/>

      <ul className="navlinks">
        <a href="/" target="_blank"><li>Shop</li></a>
        <a href="/" target="_blank"><li><FontAwesomeIcon icon={faBasketShopping}/></li></a>
        <a href="/" target="_blank"><li>My account</li></a>
      </ul>

    </div>

  );


}

export default Navbar;
