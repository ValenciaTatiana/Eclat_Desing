import { Route, Routes } from "react-router-dom"
import { EclatDesignRoutes } from "../landing/routes/EclatDesignRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<EclatDesignRoutes />} />
      </Routes>
    </>
  )
}