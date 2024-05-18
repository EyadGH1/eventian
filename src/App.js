import Home from "./pages/Home";
import { EventPage } from  "./componenets/EventPage.jsx"
import { Routes , Route } from "react-router-dom";

function App() {
return(
  <Routes>
    <Route index element = {<Home />} />
    <Route path="/Home" element={<Home/>}/>
    <Route path="/EventPage/:id" element={<EventPage/>}/>
  </Routes>
)
}

export default App;
