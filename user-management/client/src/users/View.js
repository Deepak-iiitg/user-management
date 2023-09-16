import { useLocation } from "react-router";
function View(){
    const user = useLocation();
   return(
     <div>
        <div>
           <img src={user.state.image} alt='image' style={{width:"100px",height:"100px"}}></img>
        </div>
        <div>
            <p>Name : {user.state.name}</p>
            <p>Email : {user.state.email}</p>
        </div>
     </div>
   )
}
export default View;