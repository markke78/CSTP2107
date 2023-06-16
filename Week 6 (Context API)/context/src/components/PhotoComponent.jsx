import { useEffect, useState} from 'react'
import {PhotoContext} from '../context/PhotoContext'
import PhotoList from './PhotoList'


export default function PhotoComponent() {
const CLIENT_SECRET = 'kmxQLQODHhmKbfbzYqmoO04IcOqEvULysKnJawvqvxo';

  const [allPhotos, setAllPhotos] = useState([])

  useEffect(() => {
    getPhotosFromSplash();
  }, []);

  const getPhotosFromSplash = async () => {
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=${CLIENT_SECRET}`);
    const data = await res.json();
    const requiredData = data.map((item) => {
      return {
        image: item.urls.full,
        description: item.alt_description,
        isFavorite: false,
        id: item.id,
      }
    })
    setAllPhotos(requiredData);
  }


  return (

    <PhotoContext.Provider
      value={{
        allPhotos,
        setAllPhotos,
      }}
    >
      <PhotoList />
    </PhotoContext.Provider>
  )
}
