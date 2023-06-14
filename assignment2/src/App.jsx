import './App.css'
import {useRoutes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryDetailPage from './pages/CountryDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  let element = useRoutes([
    {path: '/', element: <HomePage />},
    {path: '/country/:countryName', element: <CountryDetailPage />},
    {path: '*', element: <NotFoundPage />},
  ])

  return element
}

export default App
