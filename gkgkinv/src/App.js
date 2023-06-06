import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, EtcInfo, OurAim, OurVision } from "./pages/AboutUs";
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
function App() {
return (

    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <div >
	<Router>
	<Sidebar />
	<Routes>
		<Route path='/about-us' element={<AboutUs/>} />
		<Route path='/about-us/aim' element={<OurAim/>} />
		<Route path='/about-us/vision' element={<OurVision/>} />
        <Route path='/about-us/ectinfo' element={<EtcInfo/>} />

		<Route path='/services' element={<Services/>} />
		<Route path='/services/services1' element={<ServicesOne/>} />
		<Route path='/services/services2' element={<ServicesTwo/>} />
		<Route path='/services/services3' element={<ServicesThree/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/events' element={<Events/>} />
		<Route path='/events/events1' element={<EventsOne/>} />
		<Route path='/events/events2' element={<EventsTwo/>} />
		<Route path='/support' element={<Support/>} />

	</Routes>
	</Router>
      </div>
      <footer></footer>
      </>
);
}

export default App;
