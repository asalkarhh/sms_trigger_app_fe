import { Routes, Route } from 'react-router-dom'
import BusinessPage from './pages/BusinessPage.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<BusinessPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
