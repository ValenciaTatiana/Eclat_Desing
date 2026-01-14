import { Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { LandingPage } from "../../pages/LandingPage"

export const EclatDesignRoutes = () => {
  return (
    <div className="layout">
      <NavBar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  )
}