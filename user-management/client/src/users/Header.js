import './styles.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
function Header(){
    const navigate = useNavigate();
    return (
       
        <div className="header">
            <div className='left-header'>
                <ul>
                    <li>UserManagement</li>
                    <li><Link to='/add' style={{textDecoration:"none",color:'white'}}>AddUser</Link></li>
                    <li><Link to='/get' style={{textDecoration:"none",color:'white'}}>AllUsers</Link></li>
                </ul>
            </div>
            <div className='right-header'>
                <button onClick={()=>{
                    navigate('/');
                }}>Logout</button>
            </div>
        </div>
    )
}
export default Header;