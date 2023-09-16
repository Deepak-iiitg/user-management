import Header from "./Header";
import Form from './Form';
import './form.css';
function AddUser(){
   
   return <div className="add">
    <div>
      <Header />
    </div>
    <div className="signin">
      <Form />
    </div>
   </div>
}
export default AddUser