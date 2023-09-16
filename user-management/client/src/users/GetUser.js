import Header from "./Header";
import axios from 'axios';
import { useEffect,useState } from "react";
import './styles.css';
function GetUsers(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        
        fetch();
    },[])
    async function deleteUser(id){
        let result = await axios.delete('http://localhost:8080/users/'+id);
        fetch();
    }

    async function fetch(){
        let result = await axios.get('http://localhost:8080/users');
        result = result.data;
        setUsers(result);
        console.log(result);
    }
    return (
        <div className="add">
            <div>
               <Header/>
            </div>
            <div>
            <table className='table'>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Total Orders</th>
                    <th>Actions</th>
                </tr>
                {
                    users.map((user,index)=>{
                        return(
                            <tr>
                                <td><img src={user.image} alt='image'></img></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.total_orders}</td>
                                <td>
                                    <button style={{backgroundColor:"red",border:"none"}}
                                    onClick={()=>{
                                        deleteUser(user.id)
                                    }}>Delete</button>
                                    <button style={{backgroundColor:"green",border:"none"}}
                                    >View</button>
                                    <button style={{backgroundColor:"blue",border:"none"}}>Update</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            </div>
        </div>
    )
}
export default GetUsers;