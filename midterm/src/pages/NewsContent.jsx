import Header from '../components/header'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import AppFooter from '../components/Footer';
import NewsContext from '../context/NewsContext';

export default function NewsContent() {
    const {news} = useContext(NewsContext);

    const {id} = useParams();
    console.log(id);
  return (
    <>
        <div className='App'>
            <header id="header">
                <Header />
            </header>
            <main id="services" className="block services-block w-50 mx-auto mt-5" >
            
            {news.map((data) => {
                if(data.id == id){
                    return(
                        <>
                            <h1 className=''>
                                {data.title}
                            </h1>
                            <div className='card-text'>
                                <p>
                                    {data.description}
                                </p>
                            </div>
                            <hr />
                            <div >                        
                                <img className='rounded mx-auto d-block' src={data.image} alt='news' width={'50%'}/>
                            </div>
                            <div className='card-body'>
                                <div className='card-meta'>
                                    <span><i className=''></i>{data.author}</span>
                                    <span><i className='p-2'></i>{data.dateTime}</span>                                
                                </div>
                                <div className='content'>
                                    <p>{data.content}</p>
                                </div>

                            </div>
                        </>
                    )
                }
            })
            }
    
        
            </main>
            <footer id='footer'>
                <AppFooter />
            </footer>
        </div>
       
    </>
  )
}
