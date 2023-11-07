import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    const navigate = useNavigate();

    const Home = () => {
        navigate("/");
    }

    const contact = () => {
        navigate("/contact");
    }



    return (
        <div className='main-content'>
            <div>
                <ul className='topbar-nav'>
                    <li>
                        <a onClick={Home} >Homepage</a>
                    </li>
                    <li>
                        <a onClick={contact}>Billing page</a>
                    </li>
                    <li>
                        <a >Item</a>
                    </li>
                    <li>
                        <a>Rent</a>
                    </li>
                    <li>
                        <a >LogOut</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default NavBar;