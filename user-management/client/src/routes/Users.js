import {Routes,Route} from 'react-router-dom';
import AddUser from '../users/AddUser';
import GetUsers from '../users/GetUser';
import Login from '../auth/Login';
function Routers(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/get' element={<GetUsers/>}></Route>
            <Route path='/add' element={<AddUser/>}></Route>
        </Routes>
    )
}
export default Routers;