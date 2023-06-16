import { useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MyFavorite from './pages/MyFavorite'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  let element = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <MyFavorite /> },
    { path: '*', element: <NotFoundPage /> },
  ])
  return element
}

export default App;
