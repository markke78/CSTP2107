/* eslint-disable react/prop-types */
import { useContext } from 'react';
import NewsContext from '../context/NewsContext';
import { Link } from 'react-router-dom';
export default function NewsCard({data}) {
    const {setNews, news} = useContext(NewsContext);
    console.log(news);
    const addForLater = () => {
        const newsAfterSave = news.map((news) => {
            if(news.title === data.title){
                news.isFavorite = !news.isFavorite;
            }
            return news;
        });
        setNews(newsAfterSave);
    }

  return (
    <>
    <div className="col-md-4 mb-md-4 mb-4">
        <div className='card h-100 shadow p-3 mb-5 bg-body rounded' >
            <div className='card-body d-flex flex-column'>
                <div className='card-img'>
                    <img src={data.image} alt='news' />
                </div>
            <div className='card-body'>
                <div className='card-category text-danger'>
                    News
                </div>
                <h4 className='card-title'>
                    {data.title}
                </h4>
                <div className='card-meta'>
                    <span><i className='fa fa-user'></i>{data.author}</span>
                    <br />
                    <span><i className='fa fa-clock-o'></i>{data.dateTime}</span>
                    
                </div>
                <div className='card-text'>
                    <p>
                        {data.description}
                    </p>
                </div>
                <div className='card-button'>
                    <button className='btn btn-outline-primary'>
                        <Link className='text-decoration-none' to={`/news/${data.id}`}>
                            Read More
                        </Link>
                    </button>
                    <button onClick={addForLater} className='btn btn-outline-success'>                        
                        {data.isFavorite ? 'Remove Save' : 'Save for Later'}
                    </button>
                </div>

            </div>
            </div>

        </div>
        </div>
    </>
  )
}
