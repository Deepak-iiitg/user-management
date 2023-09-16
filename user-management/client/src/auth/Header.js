import {Link} from 'react-router-dom';
import './form.css';
function Header(){
    return(
        <div className="header">
            <div className="left-header">
                <h2>UserManagement</h2>
            </div>
            <div className="right-header">
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}
export default Header;