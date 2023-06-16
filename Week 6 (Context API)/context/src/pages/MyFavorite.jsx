/* eslint-disable react/jsx-key */
import { useContext } from 'react';
import {Context} from '../context/Context';
import '../components/stytles.css';
import { Link } from 'react-router-dom'
import PhotoCard from '../components/PhotoCard';

export default function Myfavorite() {
    const {allPhotos} = useContext(Context);
    console.log(allPhotos);


  return (
    <>

    <Link to='/'>Go Back</Link>
    <div className='photo-container'>

      {allPhotos.map((data) => {
          // eslint-disable-next-line react/jsx-key
          if(data.isFavorite){
            return <PhotoCard data={data} />
          }
          
        })
      }

    </div>
  </>
  );
}


