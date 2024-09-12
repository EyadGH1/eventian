import Nav from "../componenets/Nav";
import Landing  from "../componenets/Landing"
import Events from "../componenets/Events";
//import Event from "../componenets/Event";
import "../style.css"
import { Footer } from "../componenets/Footer";
function Home (){
    return (
        <>
        <Nav />
        <Events />
        <Footer />
        </>
    )
}

export default Home;