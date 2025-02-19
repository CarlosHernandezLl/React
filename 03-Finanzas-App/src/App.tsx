import { JSX } from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router'
import RenderTable from './pages/RenderTable'
import Login from './pages/Login'
import NavBar from './pages/Navbar'
import Register from './pages/Register'
import PrivateRoute from './pages/PrivateRoute'

function App(): JSX.Element {

  // const { isAuthenticated } = useAuth()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Register />} />
          <Route element={<PrivateRoute />}>

            <Route path="/dashboard" element={
              <>
                <NavBar />
                <Dashboard />
              </>
            } />
            <Route path="/incomes" element={
              <>
                <NavBar />
                <RenderTable />
              </>
            } />
            <Route path="/expenses" element={
              <>
                <NavBar />
                <RenderTable />
              </>
            } />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
