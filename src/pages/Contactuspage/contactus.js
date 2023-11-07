import { useEffect, useState } from "react";
import './contactus.css'; //Css import
import NavBar from "../../Components/NavBar/NavBar";

const Contactuspage = () => {

    //State
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [Contact, setContact] = useState("");



    // When a page wants to load 
    useEffect(() => {
      document.title = "Contact us";
    }, [])




    return(
        <div>
          <NavBar/>
          <form>
            <div>Patient name</div>
            <input placeholder="Patient name" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <br></br>
            <div>Patient address</div>
            <input placeholder="Pateinet address" value={address} onChange={(e) => {setAddress(e.target.value)}}/>
            <br></br>
            <div>Patient Email</div>
            <input placeholder="Email" value={Email} onChangeCapture={(e) => {setEmail(e.target.value)}}/>
            <br></br>
            <div>Patient Contact</div>
            <input placeholder="Contact" value={Contact} onChange={(e) => {setContact(e.target.value)}}/>
          </form>
        </div>
    );
}
export default Contactuspage;