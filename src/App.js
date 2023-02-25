import {
  createBrowserRouter,  
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import { Careers, careersLoader } from "./pages/careers/Careers";
import { CareerDetails, careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";
import NotFound from "./pages/NotFound";

//layouts
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import CareersLayout from "./layout/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route> 
      <Route path="careers" element={<CareersLayout />} errorElement={<CareerError/>}>
        <Route 
          index 
          element={<Careers />}
          loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
    );
}

export default App
