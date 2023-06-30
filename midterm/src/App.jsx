/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import NewsContext from './context/NewsContext';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SaveForLater from './pages/SaveForLater';
import NewsListPage from './pages/NewsListPage';
import { useRoutes } from 'react-router-dom';
import NewsContent from './pages/NewsContent';


function App() {
  let element = useRoutes([
    {path:'/', element: <HomePage />},
    {path:'/NewsListPage', element: <NewsListPage />},
    {path:'/SaveForLater', element: <SaveForLater />},
    {path:'/News/:id', element: <NewsContent />},
    {path:'*', element: <NotFoundPage />}
  ])

  const API_KEY = 'e0ba9781b4684ee4a5f2e38717b855fb';  
  const [news, setNews] = useState([]);
 
  useEffect(() => {
    getNewsFromApi();
  }, []);

  const getNewsFromApi = async () => {
    const newsDataPromise = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      
    );
    const newsData = await newsDataPromise.json();
    let id=0;
    const requiredNewsData = newsData.articles.map((news) => {
      return{
        id: id++,
        title: news.title,
        description: news.description,
        author: news.author,
        image: news.urlToImage,
        dateTime: news.publishedAt,
        content: news.content,
        isFavorite: false,
        url: news.url,
      }
    });

    setNews(requiredNewsData);
  }

  return ( 
    <NewsContext.Provider
      value={{news, setNews}}>
      {element}
    </NewsContext.Provider>
  

  )
}

export default App
