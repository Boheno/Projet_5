import { createBrowserRouter } from "react-router-dom"
import logements from "../logements.json"
import Home from './components/index.jsx'
import About from "./components/about.jsx"
import Header from "./components/header.jsx"
import Footer from "./components/Footer.jsx"
import Error from "./components/error.jsx"
import Banner from "./components/Banner.jsx"
import GenerateCards from "./components/cards.jsx"
import aboutCollapse from "./components/about.jsx"
import CardLogement from "./components/logement.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<> <Header /> <Home /> <Banner page="Home" /> <GenerateCards logements={logements} /> <Footer /> </>),
  },
  {
    path: "/logements/:id",
    element: (<> <Header /> <CardLogement logements={logements}/> <Footer /> </>),
  },
  {
    path: "/about",
    element: (<><Header /> <Banner page="About" /> <About Collapse={aboutCollapse}/> <Footer /> </>),
  },
  {
    path: "*",
    element: (<><Header /> <Error /> <Footer /> </>),
  },
]);

export default router