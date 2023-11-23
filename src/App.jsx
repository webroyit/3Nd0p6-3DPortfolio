import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, About, Experience, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
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
