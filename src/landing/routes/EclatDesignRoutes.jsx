import { Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export const EclatDesignRoutes = () => {
  return (
    <div className="layout">
      <NavBar />
      
      <main className="main-content">
        <Routes>
          <Route path="/*" element="" />
        </Routes>
      </main>
    </div>
  )
}