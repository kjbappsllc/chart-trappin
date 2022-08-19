import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { App } from './app'
import { LandingPage } from './routes/landing'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/' element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  )
}