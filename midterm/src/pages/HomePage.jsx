/* eslint-disable react-refresh/only-export-components */
import CarouselShow from '../components/CarouselShow';
import { useContext } from 'react';
import NewsContext from '../context/NewsContext';
import Header from '../components/header';
import NewsList from '../components/NewsList';
import AppFooter from '../components/Footer';
import '../App.css'

// eslint-disable-next-line react/display-name
export default function() {
  const newDAta = useContext(NewsContext)
  console.log(newDAta);
  
  return (
    <>
      <div className='App'>
        <header id="header">
          <Header />
        </header>
        <main>
          <CarouselShow data={newDAta} />
          <NewsList />
        </main>
        <footer id='footer'>
          <AppFooter />
        </footer>

      </div>

       
    </>
  )
}
