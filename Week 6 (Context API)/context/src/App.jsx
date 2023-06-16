import { useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MyFavorite from './pages/MyFavorite'
import NotFoundPage from './pages/NotFoundPage'
import { ContextProvider } from './context/Context'
import './App.css'

function App() {
  let element = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/favorite', element: <MyFavorite /> },
    { path: '*', element: <NotFoundPage /> },
  ])
  return (
    <ContextProvider>
      {element}
    </ContextProvider>
    
  )
  
}

export default App;
