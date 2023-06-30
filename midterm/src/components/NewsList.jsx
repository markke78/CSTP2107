/* eslint-disable react/jsx-key */
import Container from 'react-bootstrap/Container';
import { useContext } from 'react'
import NewsContext from '../context/NewsContext';
import NewsCard from './NewsCard';
import Row from 'react-bootstrap/Row';

export default function NewsList() {
    const newsData = useContext(NewsContext)
    console.log(newsData);
  return (
    <section id="services" className="block services-block">
        <Container fluid>
            <div className='title-holder'>
                <h2>News</h2>
                <div className='subtitle'>Latest News</div>
            </div>
            <Row >
                {newsData.news.map((data) => {
                    return(                        
                        <NewsCard data={data} />                       
                    )
                     
                })}
            </Row>
            



            
        </Container>
    </section>
  )
}
