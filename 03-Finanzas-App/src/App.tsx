import { JSX } from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router'
import RenderTable from './pages/RenderTable'
import Login from './pages/Login'

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incomes" element={<RenderTable />} />
        <Route path="/expenses" element={<RenderTable />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
