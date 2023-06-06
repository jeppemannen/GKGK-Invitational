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
return (<div>
    
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
    <img src="https://scontent.fosl4-2.fna.fbcdn.net/v/t1.15752-9/297049970_948898449841581_3182713427378061223_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=uXwXhUGOUAcAX8mkH6J&_nc_ht=scontent.fosl4-2.fna&oh=03_AdSeJvO1eROiSIPVsyG0RYpyWH228f8pA-gtVxL6Djg1fw&oe=64A42D3C"
          height="600px"  class="center"/>    </div>
);
}

export default App;
