import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";

const Homepage = () => {


  useEffect(() => {
    document.title = "Home page";
  }, [])

    return(
        <div>
          <NavBar/>
          <h1>I love to Code</h1>
        </div>
    );
}
export default Homepage;