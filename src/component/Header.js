import '../App.css';
import { Link } from 'react-router-dom';

function Header()
{
    return(
    <div className="header ">
    <ul>
       <li className="hii"> <Link to='/'>HOME</Link> </li> 
       <li className="hii">  <Link to='about'>ABOUT</Link> </li> 
       <li className="hii">  <Link to='map'>MAP</Link> </li> 
    </ul>
    </div>
    );
}
export default Header;