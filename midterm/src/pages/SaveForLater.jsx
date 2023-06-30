/* eslint-disable react/jsx-key */
import { useContext } from 'react'
import NewsContext from '../context/NewsContext'
import NewsCard from '../components/NewsCard'
import Header from '../components/header'
import Row from 'react-bootstrap/Row';
import AppFooter from '../components/Footer'
import Container from 'react-bootstrap/Container';

export default function SaveForLater() {
    const {news} = useContext(NewsContext)  
    console.log(news);

  return (
        <>   
            <div className='App'>
            <header id="header">
                <Header />
            </header>
            <main id="home" className='hero-block'>
                <section id="services" className="block services-block">
                    <Container fluid>
                        <div className='title-holder'>
                            <h2>My Save News</h2>

                        </div>
                        <Row >
                            {news.map((data) => {
                        
                                if(data.isFavorite){
                                return <NewsCard data={data} />
                                    }            
                                })
                            }
                        </Row>
                    </Container>
                </section>

            </main>
            <footer id='footer'>
                <AppFooter />
            </footer>
            </div>
    
  </>
  )
}
