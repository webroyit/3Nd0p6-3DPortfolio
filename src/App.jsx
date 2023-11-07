import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <p>Hero</p>
        </div>
        <p>About</p>
        <p>Experience</p>
        <p>Tech</p>
        <p>Works</p>
        <p>Feedbacks</p>
        <div className="relative z-0">
          <p>Contact</p>
          <p>StarsCanvas</p>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
