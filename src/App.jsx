import { Header, Footer, Home, OurService, WhyUs, Testimonial, Rectangle } from './components'
import { Routes, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="App">
        <Header />
          <Home />
          <OurService />
          <WhyUs />
          <Testimonial />
          <Rectangle />
        <Footer />
      </div>
    </>
  )
}

export default App
